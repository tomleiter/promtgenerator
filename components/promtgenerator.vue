<template>
    <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold mb-4">Prompt Generator</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div class="col-1">
      <!-- Prompt Text -->
      <div class="mb-4">
                        <label for="prompt" class="block text-sm font-medium text-white">Prompt</label>
                        <p class="text-xs text-gray-400 pb-0 pt-0 mt-1">Der Haupttext, der beschreibt, was im Bild zu sehen sein soll.</p>
                        <textarea @dblclick="copyToClipboard(generatedPrompt)" v-model="promptText" id="prompt" class="mt-1 block w-full p-2 border border-gray-300 rounded-md   h-36" placeholder="Beschreibe deine Szene..."></textarea>
                    </div>


                <!-- Aktuell generierter Prompt -->
                <div @dblclick="copyToClipboard(generatedPrompt)" v-if="fireflyPrompt" class="mt-6 px-4 py-4 border rounded-md  border-[#8d82a38f] group">
                    <h3 class="text-lg font-bold mb-0 pb-0">Midjourney Prompt <span class="text-xs text-gray-400 font-normal">Doppel-Klick zum Kopieren</span></h3>
                    <p>{{ generatedPrompt }}</p>
                    <div class="mt-4">
                        <!-- Save Prompt Button -->
                        <button @click="savePrompt" class=" bg-white bg-opacity-40 backdrop-blur-lg text-white py-1 px-4 rounded-full">Prompt speichern</button>
                    </div>
                </div>



              <!-- Stable Diffusion Prompt -->
                          <div @dblclick="copyToClipboard(stableDiffusionPrompt)" v-if="fireflyPrompt" class="mt-6 px-4 py-4 border rounded-md  border-[#8d82a38f] group ">

                              <h3 class="text-lg font-bold mb-0 pb-0">Stable Diffusion Prompt * <span class="text-xs text-gray-400 font-normal">Doppel-Klick zum Kopieren</span></h3>
                              <p>{{ stableDiffusionPrompt }}</p>
                          </div>


                              <!-- firefly Prompt -->
                          <div @dblclick="copyToClipboard(fireflyPrompt)" v-if="fireflyPrompt" class="mt-6 px-4 py-4 border rounded-md  border-[#8d82a38f] group ">
                              <h3 class="text-lg font-bold mb-0 pb-0">Adobe Firefly Prompt * <span class="text-xs text-gray-400 font-normal">Doppel-Klick zum Kopieren</span></h3>
                              <p>{{ fireflyPrompt }}</p>
                          </div>
                          <p  v-if="fireflyPrompt"  class="text-xs">* es sind nicht alle Parameter verfügbar</p>
                <form class="mt-9">
              

                    <div class="grid grid-cols-2 gap-6">

                    <!-- Reference Image URL -->
                    <div class="mb-0">
                        <label for="reference" class="block text-sm font-medium text-white">Referenzbild-URL (--reference)</label>
                        <input v-model="referenceURL" type="text" id="reference" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="https://example.com/image.jpg">
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Eine URL zu einem Bild, das als Referenz verwendet wird.</p>
                    </div>


                    <!-- Creative Reference -->
                    <div class="mb-0">
                        <label for="cref" class="block text-sm font-medium text-white">Character Referenz (URL) (--cref)</label>
                        <input v-model="creativeRef" type="text" id="cref" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="https://example.com/image.jpg">
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Verwendet eine  Referenz, um den Stil den Characters zu beeinflussen.</p>
                    </div>
                            <!-- Style Reference -->
                <div class="mb-0">
                        <label for="sref" class="block text-sm font-medium text-white">Stil-Referenz (URL)  (--sref)</label>
                        <input v-model="styleRef" type="text" id="sref" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="https://example.com/image.jpg">
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Verwendet eine stilistische Referenz, um den künstlerischen Stil zu beeinflussen.</p>
                    </div>
             
                                    <!-- Stylize -->
                                    <div class="mb-0">
                        <label for="stylize" class="block text-sm font-medium text-white">Stilisieren (--s)</label>
                        <input v-model="stylize" type="number" id="stylize" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Setze den Stilisierungsgrad (Standard ist 2500)">
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Wie stark künstlerische Stile angewendet werden. Höhere Werte führen zu abstrakteren und künstlerischeren Bildern.</p>
                    </div>
                  <!-- Exclude (No) Parameter -->
                  <div class="mb-0">
                      <label for="no" class="block text-sm font-medium text-white">Ausschlussbegriffe (--no)</label>
                      <input v-model="excludeTerms" type="text" id="no" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Begriffe, die ausgeschlossen werden sollen">
                      <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Begriffe, die im Bild nicht vorkommen sollen (getrennt durch Kommas).</p>
                  </div>
                    <!-- Aspect Ratio -->
                    <div class="mb-0">
                        <label for="aspect" class="block text-sm font-medium text-white">Seitenverhältnis (--ar)</label>
                        <input v-model="aspectRatio" type="text" id="aspect" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="16:9, 4:3, etc.">
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Das Seitenverhältnis des Bildes (z.B. 16:9 oder 1:1).</p>
                    </div>

                    <!-- Chaos -->
                    <div class="mb-0">
                        <label for="chaos" class="block text-sm font-medium text-white">Chaos (--chaos)</label>
                        <input v-model="chaos" type="number" id="chaos" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" min="0" max="100" placeholder="Setze Chaos-Level (0-100)">
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Bestimmt das Maß an Zufälligkeit und Kreativität. Höhere Werte führen zu zufälligeren Bildern.</p>
                    </div>

                    <!-- Quality -->
                    <div class="mb-0">
                        <label for="quality" class="block text-sm font-medium text-white">Qualität (--q)</label>
                        <input v-model="quality" type="number" id="quality" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" min="0.25" max="2" step="0.25" placeholder="1 für normal, 2 für hoch">
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Die Bildqualität. Höhere Werte erzeugen hochwertigere Bilder, benötigen aber mehr Zeit.</p>
                    </div>

                    <!-- Seed -->
                    <div class="mb-0">
                        <label for="seed" class="block text-sm font-medium text-white">Seed (--seed)</label>
                        <input v-model="seed" type="number" id="seed" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Seed für Konsistenz setzen">
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Bestimmt den Zufallsfaktor. Der gleiche Seed erzeugt reproduzierbare Ergebnisse.</p>
                    </div>


                    <!-- Version -->
                    <div class="mb-0">
                        <label for="version" class="block text-sm font-medium text-white">Midjourney Version (--v)</label>
                        <select v-model="version" id="version" class="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option value="6.1">v6.1</option>
                            <option value="5.1">v5.1</option>
                            <option value="5.2">v5</option>
                            <option value="4">v4</option>
                        </select>
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Wähle die Version des Midjourney-Models, die verwendet werden soll.</p>
                    </div>

                    <!-- Tile -->
                    <div class="mb-0">
                        <label class="inline-flex items-center w-full">
                            <input v-model="tile" type="checkbox" class="form-checkbox">
                            <span class="ml-2 text-white">Kachel-Modus (--tile) aktivieren</span>
                        </label>
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Erzeugt nahtlose Kacheln, nützlich für Texturen.</p>
                    </div>

                    <!-- Content Warning -->
                    <div class="mb-0">
                        <label class="inline-flex items-center">
                            <input v-model="contentWarning" type="checkbox" class="form-checkbox">
                            <span class="ml-2  text-white">Inhaltswarnung (--cw) hinzufügen</span>
                        </label>
                        <p class="text-xs text-gray-400 pb-2 pt-0 mt-1">Inhaltswarnung für sensible oder störende Inhalte hinzu.</p>
                    </div>
                </div>

            
                </form>

                     <!-- Gespeicherte Prompts -->
                     <div v-if="savedPrompts.length > 0" class="mt-6 p-4 border border-gray-300 rounded-md border-[#8d82a38f] ">
                    <h2 class="text-lg font-bold mb-2">Gespeicherte Prompts <span class="text-xs text-gray-400 font-normal"><br/>Werden Local in deinem Browser Storage gespeichert. Kopieren Doppel-Klick.</span></h2>
                    <ul>
                        <li v-for="(prompt, index) in savedPrompts" :key="index" class=" border-[1px] border-gray-100 py-3 px-3 rounded-md border-[#e3d5ff38] mb-2">
                            <p class="text-xs p-0 m-0" @dblclick="copyToClipboard(generatedPrompt)">{{ prompt }}</p>
                          <button @click="copyToClipboard(generatedPrompt)" class=" bg-green-300 text-gray-900 px-2 py-1 px-4 rounded-full mt-3 mr-2 text-xs">Kopieren</button> 
                            <button @click="deletePrompt(index)" class="bg-red-300 text-gray-900 px-2 py-1 px-2 rounded-full px-4 mt-0 mb-0 text-xs">Löschen</button>
                        </li>
                    </ul>
                </div>
            </div> 

            <div class="col-1">
    <div class="max-h-[90vh] overflow-x-auto">
                <!-- Kategorie Buttons -->
        <!-- Dynamische Kategorien und Buttons mit Pastellfarben -->
          
 <!-- Dynamische Kategorien und Buttons mit Pastellfarben --> 
  <div class="grid grid-cols-2 gap-4">
 <div v-for="(category, index) in categories" :key="index" class=" px-4 py-4 pb-0 border rounded-md border-[#8d82a38f]">
    <h3 class="font-bold text-base ">{{ category.name }}</h3>
    <div class="mb-4">
      <button
        v-for="term in category.terms"
        :key="term"
        @click="addToPrompt(term)"
        :style="{ background: category.color }"
        class=" text-[#121126]  py-1 rounded-full mr-2 mb-2 px-5    hover:bg-opacity-10 rounded-full"
      >
        {{ term }}
      </button>
    </div>
  </div>
  </div>

  </div>
    
            </div>
        </div>
    </div>
<div class="container mx-auto">
  <div class="text-center">
    <p class="text-xs text-white pt-12">No warranty is provided. Use at your own risk.<br/>
      Inspiration provided by <a  title="Zur website deaex."  target="_blank" href="https://www.deaex.at">deaex.</a> Developed by <a title="Zur website tom." target="_blank" href="https://www.leiter.cc">tom.</a><br/> <br/></p> 
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'

// Initialisiere die Felder
const promptText = ref('')
const referenceURL = ref('')
const aspectRatio = ref('')
const chaos = ref(0)
const quality = ref(2)
const seed = ref(null)
const stylize = ref(2500)
const version = ref('6.1')
const tile = ref(false)
const contentWarning = ref(false)
const creativeRef = ref('')
const styleRef = ref('')
const excludeTerms = ref('')

// Mache den setup-Block asynchron
// Kategorien werden dynamisch geladen
const categories = ref([])






// Daten aus dem JSON laden
onMounted(async () => {
    const storedPrompts = JSON.parse(localStorage.getItem('midjourneyPrompts')) || []
    savedPrompts.value = storedPrompts
    const response = await fetch('/fields.json')  // Lade das JSON aus dem public-Verzeichnis
    const data = await response.json();


    // Lade die JSON-Datei aus dem public-Verzeichnis

    console.log(data);
    // Prüfe, ob die Daten geladen wurden
    if (data) {
      // Daten in die richtige Struktur für Kategorien bringen
      categories.value = Object.keys(data).map((key) => ({
        name: key,               // Der Name der Kategorie (z.B. aesthetics, colors)
        terms: data[key].terms,  // Die Begriffe (terms) in jeder Kategorie
        color: data[key].color   // Die Farbe der Kategorie (Pastellfarben)
      }))
    }

})


// Funktion  von Begriffen zum Prompt
const isMidJourneyPromptVisible = computed(() => {
    // Prüfen, ob der Prompt die Parameter --q 2 und --v 6.1 enthält
    const hasQ2 = generatedPrompt.value.includes('--q 2')
    const hasV61 = generatedPrompt.value.includes('--v 6.1')

    // Entferne die Parameter --q 2 und --v 6.1 aus dem Prompt, um zu sehen, ob noch etwas anderes übrig ist
    const cleanedPrompt = generatedPrompt.value
        .replace('--q 2', '')
        .replace('--v 6.1', '')
        .trim()

    // Wenn der Prompt nach dem Entfernen der Parameter noch anderen Inhalt hat, wird true zurückgegeben
    return !(hasQ2 && hasV61 && cleanedPrompt === '')
})






// Generierter Prompt
const generatedPrompt = ref('')

// Gespeicherte Prompts (Array)
const savedPrompts = ref([])

// Funktion zum Speichern des aktuellen Prompts im localStorage
const savePrompt = () => {
  const currentPrompts = JSON.parse(localStorage.getItem('midjourneyPrompts')) || []
  currentPrompts.push(generatedPrompt.value)
  localStorage.setItem('midjourneyPrompts', JSON.stringify(currentPrompts))
  savedPrompts.value = currentPrompts
}

// Funktion zum Laden eines gespeicherten Prompts
const loadPrompt = (index) => {
  const currentPrompts = JSON.parse(localStorage.getItem('midjourneyPrompts')) || []
  const selectedPrompt = currentPrompts[index]

  // Teile den gespeicherten Prompt in seine Komponenten auf und weise sie den Formularfeldern zu
  promptText.value = selectedPrompt // Hier kannst du den Text nach den Parametern aufteilen und den entsprechenden Feldern zuweisen
}


// Funktion zum Löschen eines einzelnen Prompts
const deletePrompt = (index) => {
  const currentPrompts = JSON.parse(localStorage.getItem('midjourneyPrompts')) || []
  currentPrompts.splice(index, 1)
  localStorage.setItem('midjourneyPrompts', JSON.stringify(currentPrompts))
  savedPrompts.value = currentPrompts
}

// Funktion zum Kopieren des Prompts in die Zwischenablage
const copyToClipboard = (prompt) => {
  navigator.clipboard.writeText(prompt)
    .then(() => {
      alert("Prompt in die Zwischenablage kopiert!");
    })
    .catch(err => {
      console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    });
}


// Stable Diffusion Prompt
const stableDiffusionPrompt = ref('')

// Funktion zur Konvertierung des Midjourney-Prompts in einen Stable Diffusion Prompt
const convertToStableDiffusion = () => {
    let sdPrompt = promptText.value

    // Add init_image (equivalent to reference image in Stable Diffusion)
    if (referenceURL.value) {
        sdPrompt += ` --init_image ${referenceURL.value}`
    }

    // Add Seed
    if (seed.value) {
        sdPrompt += ` --seed ${seed.value}`
    }

    // Add steps (default is 50 for better quality)
    sdPrompt += ` --steps 50`

    // Add guidance scale (equivalent to stylize)
    if (stylize.value !== 2500) {
        const guidanceScale = (stylize.value / 2500) * 10  // Mapping Midjourney stylize to SD guidance scale
        sdPrompt += ` --guidance_scale ${guidanceScale}`
    }

    // Add width and height instead of aspect ratio
    if (aspectRatio.value) {
        const [width, height] = aspectRatio.value.split(':').map(Number)
        const adjustedWidth = width * 64  // Adjust for SD preferred sizes
        const adjustedHeight = height * 64
        sdPrompt += ` --width ${adjustedWidth} --height ${adjustedHeight}`
    }

    // Add Exclusion (Negative Terms for Stable Diffusion)
    if (excludeTerms.value) {
        const terms = excludeTerms.value.split(',').map(term => term.trim()).join(', ')
        sdPrompt += ` --neg "${terms}"`
    }

    stableDiffusionPrompt.value = sdPrompt
}


// Konvertiere den Midjourney-Prompt in einen Firefly Prompt
const fireflyPrompt = ref('')
const convertToFirefly = () => {
    let ffPrompt = promptText.value

    // Entferne alle -- Parameter und ihre Werte (einschließlich --q 2, --v 6.1 usw.)
    ffPrompt = ffPrompt.replace(/--[a-zA-Z0-9-]+(\s+\S+)?/g, '').trim()

    // Füge Ausschlussbegriffe hinzu, falls vorhanden
    if (excludeTerms.value) {
        const terms = excludeTerms.value.split(',').map(term => term.trim()).join(', ')
        ffPrompt += `. Exclude: ${terms}`
    }

    // Setze den finalen Adobe Firefly Prompt
    fireflyPrompt.value = ffPrompt.trim() // Entferne eventuelle überflüssige Leerzeichen am Ende
}


// Funktion zum Hinzufügen von Begriffen an der Cursor-Position
const addToPrompt = (term) => {
    const input = document.getElementById('prompt') // Greift auf das Textfeld zu
    const start = input.selectionStart
    const end = input.selectionEnd

    // Holen des aktuellen Wertes des Textes
    const textBefore = promptText.value.substring(0, start)
    const textAfter = promptText.value.substring(end)

    // Fügt den Begriff an der Cursor-Position hinzu
    promptText.value = `${textBefore} ${term} ${textAfter}`

    // Setzt den Cursor wieder an die richtige Stelle nach dem eingefügten Text
    input.selectionStart = input.selectionEnd = start + term.length + 1

    // Setzt den Fokus zurück auf das Textfeld
    input.focus()
}


// WatchEffect: wird bei jeder Änderung eines Wertes aktualisiert
watchEffect(() => {
    let prompt = promptText.value

    // Add reference image URL
    if (referenceURL.value) {
        prompt += ` ${referenceURL.value}`
    }

    // Add Aspect Ratio
    if (aspectRatio.value) {
        prompt += ` --ar ${aspectRatio.value}`
    }

    // Add Chaos
    if (chaos.value > 0) {
        prompt += ` --chaos ${chaos.value}`
    }

    // Add Quality
    if (quality.value !== 1) {
        prompt += ` --q ${quality.value}`
    }

    // Add Seed
    if (seed.value) {
        prompt += ` --seed ${seed.value}`
    }

    // Add Stylize
    if (stylize.value !== 2500) {
        prompt += ` --s ${stylize.value}`
    }

    // Add Exclusion (No Parameter for MidJourney)
    if (excludeTerms.value) {
        const terms = excludeTerms.value.split(',').map(term => term.trim()).join(', ')
        prompt += ` --no ${terms}`
    }

    // Add Version
    prompt += ` --v ${version.value}`

    // Add Tile
    if (tile.value) {
        prompt += ` --tile`
    }

    // Add Content Warning
    if (contentWarning.value) {
        prompt += ` --cw`
    }

    // Add Creative Reference
    if (creativeRef.value) {
        prompt += ` --cref ${creativeRef.value}`
    }

    // Add Style Reference
    if (styleRef.value) {
        prompt += ` --sref ${styleRef.value}`
    }

    // Setze den generierten Prompt
    generatedPrompt.value = prompt

    // Automatische Konvertierung in Stable Diffusion & Firefly Prompt
    convertToStableDiffusion()
    convertToFirefly()
})



</script>

<style>
.container {
  max-width: 1600px;
}
</style>
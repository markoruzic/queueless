import { GoogleGenAI } from '@google/genai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY

const ai = new GoogleGenAI({
  apiKey
})

function buildRecommendationPrompt(locationData) {
  return `
Ti si QueueLess AI asistent za procjenu čekanja na lokacijama.

Korisnik je otvorio lokaciju:
- Naziv: ${locationData.name}
- Kategorija: ${locationData.category}
- Procijenjeno čekanje u aplikaciji: ${locationData.estimatedWaitTime} min
- Trenutni status: ${locationData.statusLabel}
- Broj korisničkih prijava: ${locationData.reportCount}
- Najkraća prijava: ${locationData.shortestWait} min
- Najduža prijava: ${locationData.longestWait} min
- Zadnje prijave: ${locationData.recentReports.join(', ')} min

Zadatak:
1. Koristi podatke iz QueueLess aplikacije kao primarni izvor.
2. Provjeri dostupne javne informacije preko interneta ako su dostupne.
3. Daj kratku preporuku treba li korisnik ići sada ili kasnije.
4. Ako javne informacije o gužvi nisu dostupne, jasno reci da se preporuka temelji primarno na QueueLess prijavama.
5. Odgovori na hrvatskom.
6. Maksimalno 80 riječi.
`
}

export async function getGeminiRecommendation(locationData) {
  if (!apiKey) {
    throw new Error('Missing VITE_GEMINI_API_KEY')
  }

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: buildRecommendationPrompt(locationData),
    config: {
      tools: [
        {
          googleSearch: {}
        }
      ]
    }
  })

  return response.text || 'Nije moguće generirati preporuku.'
}
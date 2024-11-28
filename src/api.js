import Together from 'together-ai';

const together = new Together({ 
    apiKey: import.meta.env.VITE_TOGETHER_API_KEY 
});

export async function generateImage(prompt) {
    try {
        const response = await together.images.create({
            model: "black-forest-labs/FLUX.1-schnell-Free",
            prompt: `photorealistic dining room interior design visualization, professional architectural interior, ${prompt}, perfect lighting and composition, ultra high quality dining room design, 8k resolution, architectural photography style, interior design magazine quality, wide angle dining room view, emphasis on dining table setup, dining chairs, and dining room decor`,
            width: 1024,
            height: 1024,
            steps: 4,
            n: 1,
            response_format: "b64_json"
        });
        
        return response.data[0].b64_json;
    } catch (error) {
        console.error('Error generating dining room design:', error);
        throw error;
    }
}
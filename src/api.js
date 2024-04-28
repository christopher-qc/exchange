const url = 'https://api.coincap.io/v2/assets?limit=20';

async function getAssets() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export default getAssets;

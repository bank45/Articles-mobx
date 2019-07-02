class ServiceAPI {
    async  getResource(url: string) {
        const res = await fetch(`http:${url}`)
        if (!res['ok']) {
            throw new Error(`URL not fetch received ${res['status']}`);
        }
        return await res.json();
    }
    getNewNews(url: any) {
        return this.getResource(url)
    }
}

export default ServiceAPI;
import fetch from 'cross-fetch';

export interface JSONBinBlog {
    title: string;
    url: string;
}

class JSONBinClient {
    private basePath: string;
    
    constructor(basePath: string) {
        this.basePath = basePath;
    }

    public getRemysBlog(): Promise<JSONBinClient> {
        return fetch(`${this.basePath}/remy/blog`).then(r => {
            if (!r.ok) throw new Error("JSONBin respond with status " + r.status);
            return r.json();
        });
    }
}

export default new JSONBinClient('https://jsonbin.org');
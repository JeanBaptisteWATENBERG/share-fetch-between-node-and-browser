import jsonBinClient, { JSONBinBlog } from 'common-jsonbin-client';

jsonBinClient.getRemysBlog().then((r: JSONBinBlog) => console.log(r));
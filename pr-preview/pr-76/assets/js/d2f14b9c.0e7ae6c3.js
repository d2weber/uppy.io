"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9185],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),l=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?o.createElement(h,s(s({ref:n},u),{},{components:t})):o.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[d]="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={title:"Adding Custom Providers: Step by Step Tutorial to add Custom Providers",date:new Date("2020-06-08T00:00:00.000Z"),author:"ife",published:!1,slug:"2020/03/custom/providers"},s=void 0,a={permalink:"/uppy.io/pr-preview/pr-76/blog/2020/03/custom/providers",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2020-03-custom-providers.md",source:"@site/blog/2020-03-custom-providers.md",title:"Adding Custom Providers: Step by Step Tutorial to add Custom Providers",description:"In this post we will be going through a step by step tutorial on how to develop,",date:"2020-06-08T00:00:00.000Z",formattedDate:"June 8, 2020",tags:[],readingTime:8.92,hasTruncateMarker:!0,authors:[{name:"ife"}],frontMatter:{title:"Adding Custom Providers: Step by Step Tutorial to add Custom Providers",date:"2020-06-08T00:00:00.000Z",author:"ife",published:!1,slug:"2020/03/custom/providers"},prevItem:{title:"Image Editor \ud83c\udf08",permalink:"/uppy.io/pr-preview/pr-76/blog/2020/07/1.18/image/editor"},nextItem:{title:"Uppy 1.11 \u2014 1.13: Dark Mode, custom meta fields and Google Docs in Companion",permalink:"/uppy.io/pr-preview/pr-76/blog/2020/04/1.13"}},p={authorsImageUrls:[void 0]},l=[{value:"What are Provider Plugins?",id:"what-are-provider-plugins",level:2},{value:"Creating a Custom Companion Provider",id:"creating-a-custom-companion-provider",level:2},{value:"Setting up Companion",id:"setting-up-companion",level:3},{value:"Setting up Unsplash API",id:"setting-up-unsplash-api",level:3},{value:"Writing the custom provider",id:"writing-the-custom-provider",level:3},{value:"Creating a Custom Uppy Plugin",id:"creating-a-custom-uppy-plugin",level:2}],u={toc:l},d="wrapper";function c(e){let{components:n,...i}=e;return(0,r.kt)(d,(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post we will be going through a step by step tutorial on how to develop,\nand add custom ",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/providers/"},"providers")," to Uppy and\nCompanion. For the purpose of this tutorial we will be building a custom\nprovider for ",(0,r.kt)("a",{parentName:"p",href:"https://unsplash.com/"},"Unsplash"),"."),(0,r.kt)("h2",{id:"what-are-provider-plugins"},"What are Provider Plugins?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Provider Plugins help you connect to your accounts with remote file storage\nproviders such as Dropbox, Google Drive, Instagram and remote URLs."),(0,r.kt)("p",{parentName:"blockquote"},"They work tightly with\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uppy/companion"},"Companion")," \u2014 Uppy's\nserver-to-server communication handler between your server and file storage\nproviders.")),(0,r.kt)("p",null,"Read more on ",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/providers/"},"Provider Plugins"),"."),(0,r.kt)("p",null,"Creating a custom provider composes of two parts; ",(0,r.kt)("strong",{parentName:"p"},"Custom Companion Provider"),"\nand ",(0,r.kt)("strong",{parentName:"p"},"Custom Uppy Plugin")),(0,r.kt)("h2",{id:"creating-a-custom-companion-provider"},"Creating a Custom Companion Provider"),(0,r.kt)("p",null,"On the Companion side, we need to create a Provider that receives the provider\nrelated requests that would come from Uppy."),(0,r.kt)("h3",{id:"setting-up-companion"},"Setting up Companion"),(0,r.kt)("p",null,"We'll start off by setting up a minimal express server."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Create a folder named "custom-provider" and navigate into it')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir custom-provider\ncd custom-provider\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm init")," to setup your ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file"),(0,r.kt)("li",{parentName:"ol"},"install express, express-session, body-parser, request, uppy and\n@uppy/companion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -S express express-session body-parser request @uppy/companion uppy\n")),(0,r.kt)("p",null,"with all that done, my package.json file looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "custom-provider",\n    "dependencies": {\n        "body-parser": "^1.18.2",\n        "express": "^4.16.2",\n        "express-session": "^1.15.6",\n        "request": "^2.88.0",\n        "uppy": "^1.16.1",\n        "@uppy/companion": "^2.0.0"\n    },\n    "private": true,\n    "scripts": {}\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"server/index.js")," file within the project and add initiate your\nexpress server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst companion = require('@uppy/companion');\nconst bodyParser = require('body-parser');\nconst session = require('express-session');\n\nconst app = express();\n\napp.use(bodyParser.json());\napp.use(\n    session({\n        secret: 'some-secret',\n        resave: true,\n        saveUninitialized: true,\n    }),\n);\n\napp.use((req, res, next) => {\n    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');\n    res.setHeader(\n        'Access-Control-Allow-Methods',\n        'GET, POST, OPTIONS, PUT, PATCH, DELETE',\n    );\n    res.setHeader(\n        'Access-Control-Allow-Headers',\n        'Authorization, Origin, Content-Type, Accept',\n    );\n    next();\n});\n\n// initialize uppy\nconst companionOptions = {\n    providerOptions: {\n        dropbox: {\n            key: 'your Dropbox key',\n            secret: 'your Dropbox secret',\n        },\n    },\n    server: {\n        host: 'localhost:3020',\n        protocol: 'http',\n    },\n    filePath: './output',\n    secret: 'some-secret',\n    debug: true,\n};\n\napp.use(companion.app(companionOptions));\n\n// handle 404\napp.use((req, res, next) => {\n    return res.status(404).json({ message: 'Not Found' });\n});\n\ncompanion.socket(app.listen(3020));\n\nconsole.log('Welcome to Companion!');\nconsole.log(`Listening on http://0.0.0.0:3020`);\n")),(0,r.kt)("p",null,"The code snippet above sets up an express server and plugs Companion into it.\nHowever, the Companion setup doesn't include a custom provider yet. It only\nincludes the Dropbox provider."),(0,r.kt)("p",null,"To be sure everything is working correctly so far, you can start the server by\nrunning:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"node server/index.js")),(0,r.kt)("p",null,"It should log the following message in the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Welcome to Companion!\nListening on http://0.0.0.0:3020\n")),(0,r.kt)("p",null,"Now we need to proceed to add our custom provider."),(0,r.kt)("h3",{id:"setting-up-unsplash-api"},"Setting up Unsplash API"),(0,r.kt)("p",null,"Head to Unsplash's ",(0,r.kt)("a",{parentName:"p",href:"https://unsplash.com/oauth/applications"},"developer platform"),"\n(you'd need to create an account if you don't already have one)."),(0,r.kt)("p",null,'Click "New Application" to create a new application. For the sake of this\ntutorial, I am naming my application "companion-provider". Once it is created,\nyour page should look something like this:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(57).Z,width:"2740",height:"1364"})),(0,r.kt)("h3",{id:"writing-the-custom-provider"},"Writing the custom provider"),(0,r.kt)("p",null,"Back to our project directory, we are going to create a\n",(0,r.kt)("inlineCode",{parentName:"p"},"server/customprovider.js")," file. This will contain the code that implements the\nUnsplash provider."),(0,r.kt)("p",null,"According to\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/companion/#Adding-custom-providers"},"the docs"),", we need to\ncreate a class that implements the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"download"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"size"),"."),(0,r.kt)("p",null,"The constructor of our class will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class MyCustomProvider {\n    constructor(options) {\n        this.authProvider = 'myunsplash'; // the name of our provider (lowercased)\n    }\n    // ...\n}\n")),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," method would look something like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"list ({ token, directory }, done) {\n  const path = directory ? `/${directory}/photos` : ''\n  const options = {\n    url: `${BASE_URL}/collections${path}`,\n    method: 'GET',\n    json: true,\n    headers: {\n      Authorization: `Bearer ${token}`\n    }\n  }\n\n  request(options, (err, resp, body) => {\n    if (err) {\n      console.log(err)\n      done(err)\n      return\n    }\n\n    done(null, this._adaptData(body))\n  })\n}\n\n_adaptData (res) {\n  const data = {\n    username: null,\n    items: [],\n    nextPagePath: null\n  }\n\n  const items = res\n  items.forEach((item) => {\n    const isFolder = !!item.published_at\n    data.items.push({\n      isFolder: isFolder,\n      icon: isFolder ? item.cover_photo.urls.thumb : item.urls.thumb,\n      name: item.title || item.description,\n      mimeType: isFolder ? null : 'image/jpeg',\n      id: item.id,\n      thumbnail: isFolder ? item.cover_photo.urls.thumb : item.urls.thumb,\n      requestPath: item.id,\n      modifiedDate: item.updated_at,\n      size: null\n    })\n  })\n\n  return data\n}\n")),(0,r.kt)("p",null,"the method makes an http request to the unsplash API based on the documentation\nto ",(0,r.kt)("a",{parentName:"p",href:"https://unsplash.com/documentation#list-collections"},"list collections")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://unsplash.com/documentation#get-a-collections-photos"},"list collection's photos"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"_adaptData")," method exists to help us conform to\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/companion/#list-data"},"the list data")),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," method will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"size ({ id, token }, done) {\n  const options = {\n    url: `${BASE_URL}/photos/${id}`,\n    method: 'GET',\n    json: true,\n    headers: {\n      Authorization: `Bearer ${token}`\n    }\n  }\n\n  request(options, (err, resp, body) => {\n    if (err) {\n      console.log(err)\n      done(err)\n      return\n    }\n\n    done(null, body.width * body.height)\n  })\n}\n")),(0,r.kt)("p",null,"Unsplash's API doesn't provide the file size, so we are estimating it by\nmultiplying the width and height of the image."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"download")," method will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"download ({ id, token }, onData) {\n  const options = {\n    url: `${BASE_URL}/photos/${id}`,\n    method: 'GET',\n    json: true,\n    headers: {\n      Authorization: `Bearer ${token}`\n    }\n  }\n\n  request(options, (err, resp, body) => {\n    if (err) {\n      console.log(err)\n      return\n    }\n\n    const url = body.links.download\n    request.get(url)\n      .on('data', (chunk) => onData(null, chunk))\n      .on('end', () => onData(null, null))\n      .on('error', (err) => console.log(err))\n  })\n}\n")),(0,r.kt)("p",null,"With all of this put together the entire file would look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const request = require('request');\n\nconst BASE_URL = 'https://api.unsplash.com';\n\nclass MyCustomProvider {\n    constructor(options) {\n        this.authProvider = 'myunsplash';\n    }\n\n    list({ token, directory }, done) {\n        const path = directory ? `/${directory}/photos` : '';\n        const options = {\n            url: `${BASE_URL}/collections${path}`,\n            method: 'GET',\n            json: true,\n            headers: {\n                Authorization: `Bearer ${token}`,\n            },\n        };\n\n        request(options, (err, resp, body) => {\n            if (err) {\n                console.log(err);\n                done(err);\n                return;\n            }\n\n            done(null, this._adaptData(body));\n        });\n    }\n\n    download({ id, token }, onData) {\n        const options = {\n            url: `${BASE_URL}/photos/${id}`,\n            method: 'GET',\n            json: true,\n            headers: {\n                Authorization: `Bearer ${token}`,\n            },\n        };\n\n        request(options, (err, resp, body) => {\n            if (err) {\n                console.log(err);\n                return;\n            }\n\n            const url = body.links.download;\n            request\n                .get(url)\n                .on('data', (chunk) => onData(null, chunk))\n                .on('end', () => onData(null, null))\n                .on('error', (err) => console.log(err));\n        });\n    }\n\n    size({ id, token }, done) {\n        const options = {\n            url: `${BASE_URL}/photos/${id}`,\n            method: 'GET',\n            json: true,\n            headers: {\n                Authorization: `Bearer ${token}`,\n            },\n        };\n\n        request(options, (err, resp, body) => {\n            if (err) {\n                console.log(err);\n                done(err);\n                return;\n            }\n\n            done(null, body.width * body.height);\n        });\n    }\n\n    _adaptData(res) {\n        const data = {\n            username: null,\n            items: [],\n            nextPagePath: null,\n        };\n\n        const items = res;\n        items.forEach((item) => {\n            const isFolder = !!item.published_at;\n            data.items.push({\n                isFolder,\n                icon: isFolder ? item.cover_photo.urls.thumb : item.urls.thumb,\n                name: item.title || item.description,\n                mimeType: isFolder ? null : 'image/jpeg',\n                id: item.id,\n                thumbnail: isFolder ? item.cover_photo.urls.thumb : item.urls.thumb,\n                requestPath: item.id,\n                modifiedDate: item.updated_at,\n                size: null,\n            });\n        });\n\n        return data;\n    }\n}\n\nmodule.exports = MyCustomProvider;\n")),(0,r.kt)("p",null,"Now we can go back to ",(0,r.kt)("inlineCode",{parentName:"p"},"server/index.js")," to enable our custom provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// initialize uppy\nconst uppyOptions = {\n    providerOptions: {\n        dropbox: {\n            key: 'your Dropbox key',\n            secret: 'your Dropbox secret',\n        },\n    },\n    customProviders: {\n        myunsplash: {\n            config: {\n                // source https://unsplash.com/documentation#user-authentication\n                authorize_url: 'https://unsplash.com/oauth/authorize',\n                access_url: 'https://unsplash.com/oauth/token',\n                oauth: 2,\n                key: 'YOUR UNSPLASH API KEY',\n                secret: 'YOUR UNSPLASH API SECRET',\n            },\n            // you provider module\n            module: require('./customprovider'),\n        },\n    },\n    server: {\n        host: 'localhost:3020',\n        protocol: 'http',\n    },\n    filePath: './output',\n    secret: 'some-secret',\n    debug: true,\n};\n")),(0,r.kt)("p",null,"You can find your unsplash API key on your Unsplash\n",(0,r.kt)("a",{parentName:"p",href:"https://unsplash.com/oauth/applications"},"app dashboard")),(0,r.kt)("h2",{id:"creating-a-custom-uppy-plugin"},"Creating a Custom Uppy Plugin"),(0,r.kt)("p",null,"Now we need to implement the client part of this. To do this we need to\nimplement an Uppy Plugin."),(0,r.kt)("p",null,"First, we'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"client/MyCustomProvider.js")," file. Following the\ninstructions ",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/docs/writing-plugins/"},"here"),", our Uppy Plugin (aka\n",(0,r.kt)("inlineCode",{parentName:"p"},"client/MyCustomProvider.js")," file) could look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { UIPlugin } = require('@uppy/core');\nconst { Provider } = require('@uppy/companion-client');\nconst { ProviderViews } = require('@uppy/provider-views');\nconst { h } = require('preact');\n\nmodule.exports = class MyCustomProvider extends UIPlugin {\n    constructor(uppy, opts) {\n        super(uppy, opts);\n        this.type = 'acquirer';\n        this.id = this.opts.id || 'MyCustomProvider';\n        Provider.initPlugin(this, opts);\n\n        this.title = 'MyUnsplash';\n        this.icon = () => (\n            <svg width=\"32\" height=\"32\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z\"\n                    fill=\"#000000\"\n                    fill-rule=\"nonzero\"\n                />\n            </svg>\n        );\n\n        this.provider = new Provider(uppy, {\n            companionUrl: this.opts.companionUrl,\n            companionHeaders: this.opts.companionHeaders,\n            provider: 'myunsplash',\n            pluginId: this.id,\n        });\n\n        this.files = [];\n        this.onFirstRender = this.onFirstRender.bind(this);\n        this.render = this.render.bind(this);\n\n        // merge default options with the ones set by user\n        this.opts = { ...opts };\n    }\n\n    install() {\n        this.view = new ProviderViews(this, {\n            provider: this.provider,\n        });\n\n        const { target } = this.opts;\n        if (target) {\n            this.mount(target, this);\n        }\n    }\n\n    uninstall() {\n        this.view.tearDown();\n        this.unmount();\n    }\n\n    onFirstRender() {\n        return this.view.getFolder();\n    }\n\n    render(state) {\n        return this.view.render(state);\n    }\n};\n")),(0,r.kt)("p",null,"Asides from implementing the methods required by the Uppy Plugin, we are also\nimplmeneting the method ",(0,r.kt)("inlineCode",{parentName:"p"},"onFirstRender"),". This is because we are using the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uppy/provider-views"},"@uppy/provider-views"),"\npackage to reuse its UI componenets. The\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@uppy/provider-views"},"@uppy/provider-views"),"\npackage requires that our plugin implements an ",(0,r.kt)("inlineCode",{parentName:"p"},"onFirstRender")," method."),(0,r.kt)("p",null,"We are also pre-setting a default plugin with a default object structure which\nis used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/provider-views")," package."),(0,r.kt)("p",null,"With that done, we can now use our new plugin with Uppy. Create a file\n",(0,r.kt)("inlineCode",{parentName:"p"},"client/main.js")," and initiate Uppy in there like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const Uppy = require('@uppy/core');\nconst Dropbox = require('@uppy/dropbox');\nconst Tus = require('@uppy/tus');\nconst Dashboard = require('@uppy/dashboard');\nconst MyCustomProvider = require('./MyCustomProvider');\n\nconst uppy = Uppy({\n    debug: true,\n});\n\nuppy.use(Dropbox, {\n    companionUrl: 'http://localhost:3020',\n});\n\nuppy.use(MyCustomProvider, {\n    companionUrl: 'http://localhost:3020',\n});\n\nuppy.use(Dashboard, {\n    inline: true,\n    target: 'body',\n    plugins: ['Dropbox', 'MyCustomProvider'],\n});\n\nuppy.use(Tus, { endpoint: 'https://master.tus.io/files/' });\n")),(0,r.kt)("p",null,"Now we need to bundle the file so it can be loaded on the browser. To do this,\nwe'd install ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/budo"},"budo"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the root project directory, run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install budo -g"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"babel.config.js")," file looking like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = (api) => {\n    api.env('test');\n    return {\n        presets: [\n            [\n                '@babel/preset-env',\n                {\n                    modules: false,\n                    loose: true,\n                },\n            ],\n        ],\n        plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h' }]].filter(\n            Boolean,\n        ),\n    };\n};\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add an ",(0,r.kt)("inlineCode",{parentName:"li"},"index.html")," file (in the root of the project) that uses a bundle file\nlike so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <title>Uppy Custom provider Example</title>\n        <link\n            href="https://releases.transloadit.com/uppy/v1.15.0/uppy.min.css"\n            rel="stylesheet"\n        />\n    </head>\n    <body>\n        <script src="bundle.js"><\/script>\n    </body>\n</html>\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create the bundle file by running\n",(0,r.kt)("inlineCode",{parentName:"li"},"budo client/main.js:bundle.js -- -t babelify"),". This will bundle your\n",(0,r.kt)("inlineCode",{parentName:"li"},"client")," side work and have it running on a local server. Please check the\nconsole log to see on what port the server is running. As at the time of this\nwriting, it defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"9966")," (URL will be http://localhost:9966/).")),(0,r.kt)("p",null,"You can now load the URL of your client on your browser to see it running. When\nI run mine, it looks something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(4257).Z,width:"1518",height:"1130"})),(0,r.kt)("p",null,"In order to use this with our Companion implementation, we need to also start\nour Companion server by running ",(0,r.kt)("inlineCode",{parentName:"p"},"node server/index.js"),"."),(0,r.kt)("p",null,"Congrats! \ud83c\udf89We have completed our custom plugin at this point. For an example\nsource code on this tutorial, please see the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/tree/master/examples/custom-provider"},"custom provider example"),"."))}c.isMDXComponent=!0},4257:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/dashboard-preview-e73c4320ea02d4ef307f55d5f852aaca.png"},57:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/unsplash-api-dashboard-f7e25bbc843dda7e930e425d1ffcac5b.png"}}]);
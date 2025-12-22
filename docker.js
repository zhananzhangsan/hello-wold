docker pull  path || '/cloud/profile/o3MkOsLzt'
  ghcr.io/zhananzhangsan/argonode:latest
    SUB_PATH || 'sub';       
    PORT || 3000;      
    UUID || ''; 
    ARGO_DOMAIN || ''; //cloud gogod         
    ARGO_AUTH || '';              
    ARGO_PORT || 8001

docker pull ghcr.io/zhananzhangsan/nodews:latest 
PaaS 平台设置的环境变量
  | 变量名        | 是否必须 | 默认值 | 备注 |
  | ------------ | ------ | ------ | ------ |
  | UUID         | 否 |de04add9-5c68-6bab-950c-08cd5320df33| 开启了哪吒v1,请修改UUID|
  | PORT         | 否 |  7860  |  监听端口                    |
  | NEZHA_SERVER | 否 |        |哪吒v1填写形式：nz.abc.com:8008   哪吒v0填写形式：nz.abc.com|
  | NEZHA_PORT   | 否 |        | 哪吒v1没有此变量，v0的agent端口| 
  | NEZHA_KEY    | 否 |        | 哪吒v1的NZ_CLIENT_SECRET或v0的agent端口 |
  | NAME         | 否 |        | 节点名称前缀，例如：Glitch |
  | DOMAIN       | 是 |        | 项目分配的域名或已反代的域名，不包括https://前缀  |
  | SUB_PATH     | 否 |  sub   | 订阅路径   |
  | AUTO_ACCESS  | 否 |  true | 是否开启自动访问保活,false为关闭,true为开启,需同时填写DOMAIN变量 |

* 域名/${SUB_APTH}查看节点信息，非标端口，域名:端口/${SUB_APTH}

### 使用cloudflare workers 或 snippets 反代域名给节点套cdn加速

export default {
    async fetch(request, env) {
        let url = new URL(request.url);
        if (url.pathname.startsWith('/')) {
            var arrStr = [
                'your-space.domain', // 此处单引号里填写你的节点伪装域名
            ];
            url.protocol = 'https:'
            url.hostname = getRandomArray(arrStr)
            let new_request = new Request(url, request);
            return fetch(new_request);
        }
        return env.ASSETS.fetch(request);
    },
};
function getRandomArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

  docker.io/blug/argo-x:latest 
    PORT || 3000;      
    UUID || ''; 
    ARGO_DOMAIN || '';         
    ARGO_AUTH || '';              
    ARGO_PORT || 8080
    WSPATH || 'cloud'

  docker.io/blueg/xhttp
    7860
    DOMAIN || ''
    UUID || ''
    XPATH || UUID.slice(0, 8);       // 无需设置xhttp路径,自动获取uuid前8位

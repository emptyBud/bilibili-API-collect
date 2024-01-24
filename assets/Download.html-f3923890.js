import{_ as t,o as s,c as n,e as a}from"./app-08634687.js";const d={},e=a(`<h1 id="获取当前话全部图片地址" tabindex="-1"><a class="header-anchor" href="#获取当前话全部图片地址" aria-hidden="true">#</a> 获取当前话全部图片地址</h1><blockquote><p>https://manga.bilibili.com/twirp/comic.v1.Comic/GetImageIndex</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）/ APP</p><p><strong>URL参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录凭证</td><td>必要</td><td>使用APP鉴权方式时必填</td></tr><tr><td>appkey</td><td>str</td><td>cc8617fd6961e070</td><td>非必要</td><td></td></tr><tr><td>mobi_app</td><td>str</td><td>android_comic</td><td>非必要</td><td></td></tr><tr><td>version</td><td>str</td><td>4.21.0</td><td>非必要</td><td></td></tr><tr><td>build</td><td>str</td><td>36421000</td><td>非必要</td><td></td></tr><tr><td>channel</td><td>str</td><td>bilicomic</td><td>非必要</td><td></td></tr><tr><td>platform</td><td>str</td><td>android</td><td>非必要</td><td></td></tr><tr><td>device</td><td>str</td><td>android</td><td>非必要</td><td></td></tr><tr><td>buvid</td><td>str</td><td>XY118701XXXXXXXXX104911DXXXXXCAEXXXXE</td><td>非必要</td><td>长度为37</td></tr><tr><td>machine</td><td>str</td><td></td><td>非必要</td><td>手机品牌+型号</td></tr><tr><td>is_teenager</td><td>num</td><td>0</td><td>非必要</td><td></td></tr><tr><td>no_recommend</td><td>num</td><td>0</td><td>非必要</td><td></td></tr><tr><td>ts</td><td>num</td><td>秒级时间戳</td><td>非必要</td><td></td></tr></tbody></table><p><strong>正文参数（ application/json ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>epId（ep_id）</td><td>num</td><td>当前话的id</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td></td></tr><tr><td>data</td><td>obj</td><td></td><td></td></tr></tbody></table><p><code>data</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>path</td><td>str</td><td>.index 文件路径</td><td></td></tr><tr><td>images</td><td>array</td><td>本话图片信息</td><td></td></tr><tr><td>last_modified</td><td>str</td><td>本话信息最后修改时间</td><td></td></tr><tr><td>host</td><td>str</td><td><code>https://manga.hdslb.com</code></td><td></td></tr><tr><td>video</td><td>obj</td><td></td><td></td></tr></tbody></table><p><code>images</code> 数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>path</td><td>str</td><td>图片的路径</td><td>不包含host</td></tr><tr><td>x</td><td>num</td><td>图片宽度</td><td>单位：像素px</td></tr><tr><td>y</td><td>num</td><td>图片高度</td><td>单位：像素px</td></tr><tr><td>video_path</td><td>str</td><td></td><td></td></tr><tr><td>video_size</td><td>str</td><td></td><td></td></tr></tbody></table><p><code>video</code> 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>svid</td><td>str</td><td></td><td></td></tr><tr><td>filename</td><td>str</td><td></td><td></td></tr><tr><td>route</td><td>str</td><td></td><td></td></tr><tr><td>resource</td><td>array</td><td></td><td></td></tr><tr><td>raw_width</td><td>str</td><td></td><td></td></tr><tr><td>raw_height</td><td>str</td><td></td><td></td></tr><tr><td>raw_rotate</td><td>str</td><td></td><td></td></tr><tr><td>img_urls</td><td>array</td><td></td><td></td></tr><tr><td>bin_url</td><td>str</td><td></td><td></td></tr><tr><td>img_x_len</td><td>num</td><td></td><td></td></tr><tr><td>img_x_size</td><td>num</td><td></td><td></td></tr><tr><td>img_y_len</td><td>num</td><td></td><td></td></tr><tr><td>img_y_size</td><td>num</td><td></td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://manga.bilibili.com/twirp/comic.v1.Comic/GetImageIndex&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=xxx;&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span>
--data-raw <span class="token string">&#39;{
    &quot;ep_id&quot;: 321912
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bfs/manga/26564/321912/data.index?token=80eab62fef85c1c134a6399f817a938f&amp;ts=63404145&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">1600</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">2268</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bfs/manga/bf1c48540b68f473b429317d8f6fa8cdb6eed3a5.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">1600</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">2268</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bfs/manga/a46cfe90cfb49c67a4dbfc0002e5bc3d87d02963.jpg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">1600</span><span class="token punctuation">,</span>
        <span class="token property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">2268</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;video_size&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_modified&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-05-13 21:15:53&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://manga.hdslb.com&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;video&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;svid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;route&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;resource&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;raw_width&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;raw_height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;raw_rotate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;img_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bin_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;img_x_len&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">&quot;img_x_size&quot;</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>
      <span class="token property">&quot;img_y_len&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">&quot;img_y_size&quot;</span><span class="token operator">:</span> <span class="token number">90</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h1 id="获取某一图片的token" tabindex="-1"><a class="header-anchor" href="#获取某一图片的token" aria-hidden="true">#</a> 获取某一图片的token</h1><blockquote><p>https://manga.bilibili.com/twirp/comic.v1.Comic/ImageToken</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）/ APP</p><p><strong>URL参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录凭证</td><td>必要</td><td>使用APP鉴权方式时必填</td></tr><tr><td>appkey</td><td>str</td><td>cc8617fd6961e070</td><td>非必要</td><td></td></tr><tr><td>mobi_app</td><td>str</td><td>android_comic</td><td>非必要</td><td></td></tr><tr><td>version</td><td>str</td><td>4.21.0</td><td>非必要</td><td></td></tr><tr><td>build</td><td>str</td><td>36421000</td><td>非必要</td><td></td></tr><tr><td>channel</td><td>str</td><td>bilicomic</td><td>非必要</td><td></td></tr><tr><td>platform</td><td>str</td><td>android</td><td>非必要</td><td></td></tr><tr><td>device</td><td>str</td><td>android</td><td>非必要</td><td></td></tr><tr><td>buvid</td><td>str</td><td>XY118701XXXXXXXXX104911DXXXXXCAEXXXXE</td><td>非必要</td><td>长度为37</td></tr><tr><td>machine</td><td>str</td><td>samsung+SM-G9730</td><td>非必要</td><td>手机品牌+型号</td></tr><tr><td>is_teenager</td><td>num</td><td>0</td><td>非必要</td><td></td></tr><tr><td>no_recommend</td><td>num</td><td>0</td><td>非必要</td><td></td></tr><tr><td>ts</td><td>num</td><td>秒级时间戳</td><td>非必要</td><td></td></tr></tbody></table><p><strong>正文参数（ application/json ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>urls</td><td>str</td><td>请求token的图片地址</td><td>必要</td><td><code>[\\&quot;https://i0.hdslb.com{path}\\&quot;]</code> <br>{path}代表图片的相对网站路径，支持jpg和webp</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td></td></tr><tr><td>data</td><td>array</td><td></td><td></td></tr></tbody></table><p><code>data</code> 数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>url</td><td>str</td><td>图片下载的地址</td><td>此时网址开头 https://manga.hdslb.com</td></tr><tr><td>token</td><td>str</td><td>图片下载需要的token</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;https://manga.bilibili.com/twirp/comic.v1.Comic/ImageToken&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Cookie: SESSDATA=xxx;&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-H</span> <span class="token string">&#39;Content-Type: application/json&#39;</span> <span class="token punctuation">\\</span>
--data-raw <span class="token string">&#39;{
    &quot;urls&quot;: &quot;[\\&quot;https://i0.hdslb.com/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg\\&quot;]&quot;
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://manga.hdslb.com/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;36931815abb35857627a22c347dc1c86&amp;ts=634045c2&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h1 id="下载图片" tabindex="-1"><a class="header-anchor" href="#下载图片" aria-hidden="true">#</a> 下载图片</h1><p><em>请求方式：GET</em></p><p>在上一步获取token的基础上，构建如下的url</p><p>例如获取到此token</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;code&quot;: 0,
  &quot;msg&quot;: &quot;&quot;,
  &quot;data&quot;: [
    {
      &quot;url&quot;: &quot;https://manga.hdslb.com/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg&quot;,
      &quot;token&quot;: &quot;36931815abb35857627a22c347dc1c86&amp;ts=634045c2&quot;
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则访问以下网址即可，注意需要添加<code>?token=</code>。此网址有效期较短</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://manga.hdslb.com/bfs/manga/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg?token=36931815abb35857627a22c347dc1c86&amp;ts=634045c2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注</strong>：若不加取图 Token 直接访问 <code>https://(i0|i1).hdslb.com/bfs/(manga|new_dyn|archive)/11e404e602fa9f709bfb89d692ac56d2e17f974d.jpg</code>均无法获取</p>`,44),o=[e];function p(r,i){return s(),n("div",null,o)}const l=t(d,[["render",p],["__file","Download.html.vue"]]);export{l as default};

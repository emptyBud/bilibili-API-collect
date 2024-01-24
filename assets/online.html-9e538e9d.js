import{_ as t,o as n,c as s,e as a}from"./app-08634687.js";const d={},e=a(`<h1 id="视频在线人数" tabindex="-1"><a class="header-anchor" href="#视频在线人数" aria-hidden="true">#</a> 视频在线人数</h1><h2 id="获取视频在线人数-web端" tabindex="-1"><a class="header-anchor" href="#获取视频在线人数-web端" aria-hidden="true">#</a> 获取视频在线人数_web端</h2><blockquote><p>https://api.bilibili.com/x/player/online/total</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要(可选)</td><td>avid与bvid任选一个</td></tr><tr><td>bvid</td><td>str</td><td>稿件bvid</td><td>必要(可选)</td><td>avid与bvid任选一个</td></tr><tr><td>cid</td><td>num</td><td>视频cid</td><td>必要</td><td>用于选择目标分P</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误<br>-404：无视频</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>total</td><td>str</td><td>所有终端总计人数</td><td>例如<code>10万+</code></td></tr><tr><td>count</td><td>str</td><td>web端实时在线人数</td><td></td></tr><tr><td>show_switch</td><td>obj</td><td>数据显示控制</td><td></td></tr></tbody></table><p><code>data</code>中的<code>show_switch</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>total</td><td>bool</td><td>展示所有终端总计人数</td><td></td></tr><tr><td>count</td><td>bool</td><td>展示web端实时在线人数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询视频<code>av759949922</code>/<code>BV1y64y1q757</code>中1P(<code>392402545</code>)的在线人数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/player/online/total&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=759949922&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=392402545&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9.4万+&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50953&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;show_switch&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取视频在线人数-app端" tabindex="-1"><a class="header-anchor" href="#获取视频在线人数-app端" aria-hidden="true">#</a> 获取视频在线人数_APP端</h2><blockquote><p>https://app.bilibili.com/x/v2/view/video/online</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要</td><td></td></tr><tr><td>appkey</td><td>str</td><td>APP密钥</td><td>APP方式必要</td><td></td></tr><tr><td>cid</td><td>num</td><td>视频cid</td><td>必要</td><td>用于选择目标分P</td></tr><tr><td>ts</td><td>num</td><td>当前时间戳</td><td>APP方式必要</td><td></td></tr><tr><td>sign</td><td>str</td><td>APP签名</td><td>APP方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误<br>-404：无视频</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>online</td><td>obj</td><td>所有终端总计人数</td><td></td></tr></tbody></table><p><code>data</code>中的<code>show_switch</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>online</td><td>str</td><td>所有终端总计人数</td><td>例如<code>10万+人在看</code></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询视频<code>av759949922</code>/<code>BV1y64y1q757</code>中1P(<code>392402545</code>)的在线人数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://app.bilibili.com/x/v2/view/video/online&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=759949922&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;appkey=1d8b6e7d45233436&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=392402545&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ts=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;sign=172dfd9941a01275eb93ce6246cd8556&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;online&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;total_text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8.8万+人在看&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,33),o=[e];function p(r,l){return n(),s("div",null,o)}const c=t(d,[["render",p],["__file","online.html.vue"]]);export{c as default};

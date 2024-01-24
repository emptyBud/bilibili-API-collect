import{_ as n,o as s,c as a,e as t}from"./app-08634687.js";const p={},e=t(`<h1 id="高能进度条" tabindex="-1"><a class="header-anchor" href="#高能进度条" aria-hidden="true">#</a> 高能进度条</h1><p>高能进度条反应了在时域上，单位时间内弹幕发送量的变化趋势</p><p>并用曲线顶点表示在进度条上，实现可视化</p><h2 id="获取弹幕趋势顶点列表" tabindex="-1"><a class="header-anchor" href="#获取弹幕趋势顶点列表" aria-hidden="true">#</a> 获取弹幕趋势顶点列表</h2><blockquote><p>https://bvc.bilivideo.com/pbp/data</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>cid</td><td>num</td><td>视频cid</td><td>必要</td><td></td></tr><tr><td>aid</td><td>num</td><td>稿件avid</td><td>非必要</td><td></td></tr><tr><td>bvid</td><td>num</td><td>稿件bvid</td><td>非必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>step_sec</td><td>num</td><td>采样间隔时间</td><td>单位为秒<br>由视频时长决定</td></tr><tr><td>tagstr</td><td>str</td><td>？？？</td><td>作用尚不明确</td></tr><tr><td>events</td><td>obj</td><td>数据本体</td><td></td></tr><tr><td>debug</td><td>str</td><td>调试信息</td><td>json字串</td></tr></tbody></table><p><code>events</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>default</td><td>array</td><td>顶点值列表</td><td></td></tr></tbody></table><p><code>events</code>对象中的数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>num</td><td>顶点1</td><td></td></tr><tr><td>n</td><td>num</td><td>顶点(n+1)</td><td>顶点个数由视频时长和采样时间决定</td></tr><tr><td>……</td><td>num</td><td>……</td><td>……</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取视频<code>cid=3724723</code>的获取弹幕趋势顶点列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/pbp/data&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=3724723&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;step_sec&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
	<span class="token property">&quot;tagstr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pbphide_0&amp;client_&amp;innersign_0&amp;group_eg&amp;nocheck_0&amp;version_&amp;pbphide_0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8853</span><span class="token punctuation">,</span> <span class="token number">8011</span><span class="token punctuation">,</span> <span class="token number">8043.5</span><span class="token punctuation">,</span> <span class="token number">8602.5</span><span class="token punctuation">,</span> <span class="token number">9377</span><span class="token punctuation">,</span> <span class="token number">18838</span><span class="token punctuation">,</span> <span class="token number">9645</span><span class="token punctuation">,</span> <span class="token number">10396</span><span class="token punctuation">,</span> <span class="token number">10672.5</span><span class="token punctuation">,</span> <span class="token number">10316.5</span><span class="token punctuation">,</span> <span class="token number">9987</span><span class="token punctuation">,</span> <span class="token number">9524</span><span class="token punctuation">,</span> <span class="token number">9040</span><span class="token punctuation">,</span> <span class="token number">9081</span><span class="token punctuation">,</span> <span class="token number">8747</span><span class="token punctuation">,</span> <span class="token number">8517</span><span class="token punctuation">,</span> <span class="token number">8559.5</span><span class="token punctuation">,</span> <span class="token number">8220.5</span><span class="token punctuation">,</span> <span class="token number">8133</span><span class="token punctuation">,</span> <span class="token number">7164</span><span class="token punctuation">,</span> <span class="token number">5626</span><span class="token punctuation">,</span> <span class="token number">4992</span><span class="token punctuation">,</span> <span class="token number">4628.5</span><span class="token punctuation">,</span> <span class="token number">4570.5</span><span class="token punctuation">,</span> <span class="token number">4473.5</span><span class="token punctuation">,</span> <span class="token number">4681.5</span><span class="token punctuation">,</span> <span class="token number">4365.5</span><span class="token punctuation">,</span> <span class="token number">3811.5</span><span class="token punctuation">,</span> <span class="token number">3813</span><span class="token punctuation">,</span> <span class="token number">3883</span><span class="token punctuation">,</span> <span class="token number">4059.5</span><span class="token punctuation">,</span> <span class="token number">4103.5</span><span class="token punctuation">,</span> <span class="token number">4227.5</span><span class="token punctuation">,</span> <span class="token number">4330.5</span><span class="token punctuation">,</span> <span class="token number">4096.5</span><span class="token punctuation">,</span> <span class="token number">4228.5</span><span class="token punctuation">,</span> <span class="token number">4337</span><span class="token punctuation">,</span> <span class="token number">5017</span><span class="token punctuation">,</span> <span class="token number">5897</span><span class="token punctuation">,</span> <span class="token number">6220</span><span class="token punctuation">,</span> <span class="token number">5711.5</span><span class="token punctuation">,</span> <span class="token number">4871.5</span><span class="token punctuation">,</span> <span class="token number">4533</span><span class="token punctuation">,</span> <span class="token number">4364</span><span class="token punctuation">,</span> <span class="token number">3976</span><span class="token punctuation">,</span> <span class="token number">4012</span><span class="token punctuation">,</span> <span class="token number">3985</span><span class="token punctuation">,</span> <span class="token number">3658</span><span class="token punctuation">,</span> <span class="token number">3540</span><span class="token punctuation">,</span> <span class="token number">3789</span><span class="token punctuation">,</span> <span class="token number">3646</span><span class="token punctuation">,</span> <span class="token number">3045</span><span class="token punctuation">,</span> <span class="token number">2769</span><span class="token punctuation">,</span> <span class="token number">2587</span><span class="token punctuation">,</span> <span class="token number">2488.5</span><span class="token punctuation">,</span> <span class="token number">2402.5</span><span class="token punctuation">,</span> <span class="token number">2521.5</span><span class="token punctuation">,</span> <span class="token number">2508.5</span><span class="token punctuation">,</span> <span class="token number">2763.5</span><span class="token punctuation">,</span> <span class="token number">2941.5</span><span class="token punctuation">,</span> <span class="token number">3685.5</span><span class="token punctuation">,</span> <span class="token number">3337.5</span><span class="token punctuation">,</span> <span class="token number">2457</span><span class="token punctuation">,</span> <span class="token number">2313</span><span class="token punctuation">,</span> <span class="token number">2322.5</span><span class="token punctuation">,</span> <span class="token number">2480.5</span><span class="token punctuation">,</span> <span class="token number">2595</span><span class="token punctuation">,</span> <span class="token number">2520</span><span class="token punctuation">,</span> <span class="token number">2173.5</span><span class="token punctuation">,</span> <span class="token number">2058.5</span><span class="token punctuation">,</span> <span class="token number">2268.5</span><span class="token punctuation">,</span> <span class="token number">2312.5</span><span class="token punctuation">,</span> <span class="token number">2847</span><span class="token punctuation">,</span> <span class="token number">1083</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;max_time\\&quot;:237,\\&quot;zero_points_ratio\\&quot;:0.025,\\&quot;total_dm\\&quot;:1000,\\&quot;event_count\\&quot;:400147}&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,19),o=[e];function c(u,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","pbp.html.vue"]]);export{d as default};

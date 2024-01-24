import{_ as n,o as s,c as t,e as a}from"./app-08634687.js";const p={},e=a(`<h1 id="视频tag" tabindex="-1"><a class="header-anchor" href="#视频tag" aria-hidden="true">#</a> 视频TAG</h1><h2 id="获取视频tag信息" tabindex="-1"><a class="header-anchor" href="#获取视频tag信息" aria-hidden="true">#</a> 获取视频TAG信息</h2><blockquote><p>https://api.bilibili.com/x/tag/archive/tags</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要（可选）</td><td>avid与bvid任选一个</td></tr><tr><td>bvid</td><td>str</td><td>稿件bvid</td><td>必要（可选）</td><td>avid与bvid任选一个</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>array</td><td>TAG列表</td><td>无TAG为空</td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>第1个TAG</td><td></td></tr><tr><td>n</td><td>obj</td><td>第（n+1）个TAG</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>tag_id</td><td>num</td><td>tag_id</td><td></td></tr><tr><td>tag_name</td><td>str</td><td>TAG名称</td><td></td></tr><tr><td>cover</td><td>str</td><td>TAG图片url</td><td></td></tr><tr><td>head_cover</td><td>str</td><td>TAG页面头图url</td><td></td></tr><tr><td>content</td><td>str</td><td>TAG介绍</td><td></td></tr><tr><td>short_content</td><td>str</td><td>TAG简介</td><td></td></tr><tr><td>type</td><td>num</td><td>？？？</td><td></td></tr><tr><td>state</td><td>num</td><td>0</td><td></td></tr><tr><td>ctime</td><td>num</td><td>创建时间</td><td>时间戳</td></tr><tr><td>count</td><td>obj</td><td>状态数</td><td></td></tr><tr><td>is_atten</td><td>num</td><td>是否关注</td><td>0：未关注<br>1：已关注<br>需要登录(Cookie) <br>未登录为0</td></tr><tr><td>likes</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>hates</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>attribute</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>liked</td><td>num</td><td>是否已经点赞</td><td>0：未点赞<br>1：已点赞<br>需要登录(Cookie) <br>未登录为0</td></tr><tr><td>hated</td><td>num</td><td>是否已经点踩</td><td>0：未点踩<br>1：已点踩<br>需要登录(Cookie) <br>未登录为0</td></tr><tr><td>extra_attr</td><td>num</td><td>? ? ?</td><td></td></tr></tbody></table><p><code>data</code>数组中的对象中的<code>count</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>view</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>use</td><td>num</td><td>视频添加TAG数</td><td></td></tr><tr><td>atten</td><td>num</td><td>TAG关注</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>查询视频<code>av89772773</code>/<code>BV1M741177Kg</code>的TAG</p><p>avid方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/tag/archive/tags&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=89772773&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>bvid方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/tag/archive/tags&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;bvid=BV1M741177Kg&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">&quot;tag_id&quot;</span><span class="token operator">:</span> <span class="token number">12620189</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;异度侵入&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;head_cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;short_content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1576235749</span><span class="token punctuation">,</span>
		<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;use&quot;</span><span class="token operator">:</span> <span class="token number">6392</span><span class="token punctuation">,</span>
			<span class="token property">&quot;atten&quot;</span><span class="token operator">:</span> <span class="token number">8938</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;is_atten&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hates&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;attribute&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;liked&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hated&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;tag_id&quot;</span><span class="token operator">:</span> <span class="token number">7520816</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bilibili新星计划&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;head_cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;short_content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1529717850</span><span class="token punctuation">,</span>
		<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;use&quot;</span><span class="token operator">:</span> <span class="token number">1967314</span><span class="token punctuation">,</span>
			<span class="token property">&quot;atten&quot;</span><span class="token operator">:</span> <span class="token number">65082</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;is_atten&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hates&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;attribute&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;liked&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hated&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;tag_id&quot;</span><span class="token operator">:</span> <span class="token number">707</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ED&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;head_cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;short_content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
		<span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1436866637</span><span class="token punctuation">,</span>
		<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;use&quot;</span><span class="token operator">:</span> <span class="token number">62646</span><span class="token punctuation">,</span>
			<span class="token property">&quot;atten&quot;</span><span class="token operator">:</span> <span class="token number">75642</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;is_atten&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hates&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;attribute&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;liked&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hated&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;tag_id&quot;</span><span class="token operator">:</span> <span class="token number">1394</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;动漫&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/tag/d08c5fe17ceb793e7ce95d9c67392743b33b46d0.jpg&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;head_cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;      “动漫”是动画和漫画的合称与缩写。在其他语言相当少用。随着现代传媒技术的发展，动画（animation或anime）和漫画（comics，manga；特别是故事性漫画）之间联系日趋紧密，两者常被合而为“动漫”。\\n　   由于漫画本身的发展形成了现代故事漫画的表现形式，将影视艺术融入漫画之中，使得漫画与动画更容易结合，影视艺术独特的地方在于它能通过镜头的推拉摇移和片段剪辑的蒙太奇技巧来表达想法和感受。漫画正是吸收了影视艺术的这两个特点。当讲述的故事越发复杂、人物越发丰富的时候，传统单线式叙事的方法就越行不通，蒙太奇的介入就成为一种需要了；当漫画家在传统表现手段中无法找到更合适的抒发感情的方法的时候，当读者需要作品有更强的冲击力和表现力的时候，各种镜头的灵活运用就成为一种必需了。一部现代故事漫画往往集远、中、近、特四种镜头于一身，漫画家往往能熟练地运用镜头的移动和各种蒙太奇剪接，对故事特定部分的情绪和氛围进行渲染。这就是现代故事漫画容易和动画结合的一个原因，因为它天生就像动画的分镜头剧本，读者在看漫画时如同在看一部电影。正是有着这样的相似性所以如今将动画和漫画合称为“动漫”。&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;short_content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
		<span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1436866637</span><span class="token punctuation">,</span>
		<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;use&quot;</span><span class="token operator">:</span> <span class="token number">1134143</span><span class="token punctuation">,</span>
			<span class="token property">&quot;atten&quot;</span><span class="token operator">:</span> <span class="token number">113030</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;is_atten&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hates&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;attribute&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;liked&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hated&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;tag_id&quot;</span><span class="token operator">:</span> <span class="token number">13289329</span><span class="token punctuation">,</span>
		<span class="token property">&quot;tag_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;异度侵入ed原图&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;head_cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;short_content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token property">&quot;state&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;ctime&quot;</span><span class="token operator">:</span> <span class="token number">1581948411</span><span class="token punctuation">,</span>
		<span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;view&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token property">&quot;use&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
			<span class="token property">&quot;atten&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;is_atten&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;likes&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hates&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;attribute&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;liked&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hated&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="点赞-取消点赞视频tag" tabindex="-1"><a class="header-anchor" href="#点赞-取消点赞视频tag" aria-hidden="true">#</a> 点赞&amp;取消点赞视频TAG</h2><blockquote><p>https://api.bilibili.com/x/tag/archive/like2</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>重复请求为取消</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要</td><td></td></tr><tr><td>tag_id</td><td>num</td><td>tag_id</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>为视频<code>av89772773</code>的TAG<code>12620189</code>点赞</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/tag/archive/like2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=89772773&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;tag_id=12620189&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="点踩-取消点踩视频tag" tabindex="-1"><a class="header-anchor" href="#点踩-取消点踩视频tag" aria-hidden="true">#</a> 点踩&amp;取消点踩视频TAG</h2><blockquote><p>https://api.bilibili.com/x/tag/archive/hate2</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p>重复访问为取消</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td>必要</td><td></td></tr><tr><td>tag_id</td><td>num</td><td>tag_id</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功 <br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>为视频<code>av89772773</code>的TAG<code>7520816</code>点踩</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://pi.bilibili.com/x/tag/archive/hate2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;aid=89772773&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;tag_id=7520816&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,51),o=[e];function r(c,l){return s(),t("div",null,o)}const d=n(p,[["render",r],["__file","tags.html.vue"]]);export{d as default};

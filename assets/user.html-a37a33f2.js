import{_ as t,o as n,c as s,e as a}from"./app-08634687.js";const e={},d=a(`<h1 id="直播间用户实用-api" tabindex="-1"><a class="header-anchor" href="#直播间用户实用-api" aria-hidden="true">#</a> 直播间用户实用 API</h1><h2 id="获取用户持有的粉丝勋章信息" tabindex="-1"><a class="header-anchor" href="#获取用户持有的粉丝勋章信息" aria-hidden="true">#</a> 获取用户持有的粉丝勋章信息</h2><blockquote><p><s>https://api.live.bilibili.com/fans_medal/v5/live_fans_medal/iApiMedal</s> (旧) https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或 APP</p><p><strong>url 参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>page_size</td><td>num</td><td>每页的数量</td><td>必要</td><td>最大为 10，超出 <code>1002002：参数异常</code></td></tr><tr><td>page</td><td>num</td><td>返回结果页数</td><td>必要</td><td>两个参数不填返回空，只 page 不填或错误则 500 异常</td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-1002002：参数异常<br>-500：服务器异常</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为 &quot;0&quot;</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>count</td><td>num</td><td>勋章数量</td><td></td></tr><tr><td>items</td><td>array</td><td>粉丝勋章信息本体</td><td></td></tr><tr><td>page_info</td><td>obj</td><td>页码信息</td><td></td></tr></tbody></table><p><code>items</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>can_delete</td><td>bool</td><td>可否删除</td><td></td></tr><tr><td>day_limit</td><td>num</td><td>日经验上限（原力值）</td><td>eg: 1500</td></tr><tr><td>guard_level</td><td>num</td><td></td><td></td></tr><tr><td>guard_medal_title</td><td>str</td><td>加成状态</td><td></td></tr><tr><td>intimacy</td><td>num</td><td>当前已得亲密度</td><td></td></tr><tr><td>is_lighted</td><td>num</td><td>是否点亮</td><td>0：未点亮<br>1：点亮</td></tr><tr><td>level</td><td>num</td><td>勋章等级</td><td></td></tr><tr><td>medal_name</td><td>str</td><td>勋章名</td><td></td></tr><tr><td>medal_color_border</td><td>num</td><td>勋章边框颜色信息</td><td>颜色数值为 10 进制的 16 进制值（下同）</td></tr><tr><td>medal_color_start</td><td>num</td><td>勋章起始颜色</td><td>从右往左渐变（20 级+勋章）</td></tr><tr><td>medal_color_end</td><td>num</td><td>勋章结束颜色</td><td>从右往左渐变（20 级+勋章）</td></tr><tr><td>medal_id</td><td>num</td><td>粉丝勋章 id</td><td></td></tr><tr><td>next_intimacy</td><td>num</td><td>升级所需经验</td><td></td></tr><tr><td>today_feed</td><td>num</td><td>本日亲密度</td><td></td></tr><tr><td>roomid</td><td>num</td><td>直播间房间号</td><td></td></tr><tr><td>status</td><td>num</td><td></td><td></td></tr><tr><td>target_id</td><td>number</td><td>up 主 mid</td><td></td></tr><tr><td>target_name</td><td>str</td><td>up 主用户名</td><td></td></tr><tr><td>uname</td><td>str</td><td>up 主用户名</td><td></td></tr></tbody></table><p><code>page_info</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>total_page</td><td>num</td><td>页码总长度</td><td></td></tr><tr><td>cur_page</td><td>num</td><td>当前返回的页码</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://api.live.bilibili.com/xlive/app-ucenter/v1/user/GetMyMedals?page<span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;</span><span class="token assign-left variable">page_size</span><span class="token operator">=</span><span class="token number">10</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&quot;SESSDATA=xxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;can_deleted&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;day_limit&quot;</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span>
        <span class="token property">&quot;guard_level&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;guard_medal_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;未开启加成&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;intimacy&quot;</span><span class="token operator">:</span> <span class="token number">9617</span><span class="token punctuation">,</span>
        <span class="token property">&quot;is_lighted&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
        <span class="token property">&quot;medal_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;锦依卫&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;medal_color_border&quot;</span><span class="token operator">:</span> <span class="token number">12632256</span><span class="token punctuation">,</span>
        <span class="token property">&quot;medal_color_end&quot;</span><span class="token operator">:</span> <span class="token number">12632256</span><span class="token punctuation">,</span>
        <span class="token property">&quot;medal_color_start&quot;</span><span class="token operator">:</span> <span class="token number">12632256</span><span class="token punctuation">,</span>
        <span class="token property">&quot;medal_id&quot;</span><span class="token operator">:</span> <span class="token number">29245</span><span class="token punctuation">,</span>
        <span class="token property">&quot;next_intimacy&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;today_feed&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;roomid&quot;</span><span class="token operator">:</span> <span class="token number">1546736</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;target_id&quot;</span><span class="token operator">:</span> <span class="token number">36081646</span><span class="token punctuation">,</span>
        <span class="token property">&quot;target_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;洛天依&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;page_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;cur_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;total_page&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="佩戴勋章" tabindex="-1"><a class="header-anchor" href="#佩戴勋章" aria-hidden="true">#</a> 佩戴勋章</h2><blockquote><p>https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear</p></blockquote><p><em>请求方式：POST</em></p><p><strong>表单参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>medal_id</td><td>num</td><td>勋章 id</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>num</td><td>cookie 中 bili_jct 字段</td><td>必要</td><td></td></tr><tr><td>csrf_token</td><td>num</td><td>同上</td><td>必要</td><td></td></tr></tbody></table><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为佩戴成功</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>默认为无</td></tr></tbody></table><p><strong>示例：</strong></p><p>佩戴勋章 id 为 1 的勋章</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var madelForm = new FormData();
madelForm.append(&quot;medal_id&quot;, 1);
madelForm.append(&quot;csrf&quot;, bili_jct);
madelForm.append(&quot;csrf_token&quot;, bili_jct);
$.ajax({
    url: &quot;https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear&quot;,
    type: &quot;POST&quot;,
    data: madelForm,
    dataType: &quot;JSON&quot;,
    processData: false,
    contentType: false,
    cache: false,
    xhrFields: {
        withCredentials: true
    },
    success: function (){

    }
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;佩戴成功&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="直播签到" tabindex="-1"><a class="header-anchor" href="#直播签到" aria-hidden="true">#</a> 直播签到</h2><blockquote><p>https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/DoSign</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或 APP</p><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>1：参数错误</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为当日签到奖励内容</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td>默认为空</td></tr></tbody></table><h2 id="本月直播签到信息" tabindex="-1"><a class="header-anchor" href="#本月直播签到信息" aria-hidden="true">#</a> 本月直播签到信息</h2><blockquote><p>https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/WebGetSignInfo</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或 APP</p><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>text</td><td>str</td><td>今日签到奖励信息</td><td>默认为空</td></tr><tr><td>specialText</td><td>str</td><td>连续签到奖励信息</td><td>默认为空</td></tr><tr><td>status</td><td>num</td><td>签到状态</td><td>0：未签到<br>1：已签到</td></tr><tr><td>allDays</td><td>num</td><td>当月天数</td><td></td></tr><tr><td>curMonth</td><td>num</td><td>当前月</td><td></td></tr><tr><td>curYear</td><td>num</td><td>当前年</td><td></td></tr><tr><td>curDay</td><td>num</td><td>当前日</td><td></td></tr><tr><td>curData</td><td>str</td><td>当前日期（格式化）</td><td>eg: 2023-2-19</td></tr><tr><td>hadSignDays</td><td>num</td><td>当月已签到天数</td><td>默认为0</td></tr><tr><td>newTask</td><td>num</td><td>作用未知</td><td>默认为0</td></tr><tr><td>signDaysList</td><td>array</td><td>当月已签到日列表</td><td>默认为空</td></tr><tr><td>signBonusDaysList</td><td>array</td><td>当月已签到且有特殊奖励日列表</td><td>默认为空</td></tr></tbody></table><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3000点用户经验,2根辣条&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;specialText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;再签到7天可以获得50根辣条&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;allDays&quot;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
        <span class="token property">&quot;curMonth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;curYear&quot;</span><span class="token operator">:</span> <span class="token number">2023</span><span class="token punctuation">,</span>
        <span class="token property">&quot;curDay&quot;</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
        <span class="token property">&quot;curDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-2-19&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hadSignDays&quot;</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
        <span class="token property">&quot;newTask&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;signDaysList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token number">11</span><span class="token punctuation">,</span>
            <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token number">14</span><span class="token punctuation">,</span>
            <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token number">17</span><span class="token punctuation">,</span>
            <span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token number">19</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;signBonusDaysList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">6</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="上月直播签到信息" tabindex="-1"><a class="header-anchor" href="#上月直播签到信息" aria-hidden="true">#</a> 上月直播签到信息</h2><blockquote><p>https://api.live.bilibili.com/sign/getLastMonthSignDays</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）或 APP</p><p><strong>json 回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>days</td><td>num</td><td>上月天数</td><td></td></tr><tr><td>month</td><td>num</td><td>上月月份值</td><td></td></tr><tr><td>hadSignDays</td><td>num</td><td>上月已签到天数</td><td>默认为0</td></tr><tr><td>signDaysList</td><td>array</td><td>上月已签到日列表</td><td>默认为空</td></tr><tr><td>signBonusDaysList</td><td>array</td><td>上月已签到且有特殊奖励日列表</td><td>默认为空</td></tr></tbody></table><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;month&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;days&quot;</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hadSignDays&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token property">&quot;signDaysList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token number">12</span><span class="token punctuation">,</span>
            <span class="token number">13</span><span class="token punctuation">,</span>
            <span class="token number">14</span><span class="token punctuation">,</span>
            <span class="token number">15</span><span class="token punctuation">,</span>
            <span class="token number">18</span><span class="token punctuation">,</span>
            <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token number">23</span><span class="token punctuation">,</span>
            <span class="token number">24</span><span class="token punctuation">,</span>
            <span class="token number">25</span><span class="token punctuation">,</span>
            <span class="token number">26</span><span class="token punctuation">,</span>
            <span class="token number">27</span><span class="token punctuation">,</span>
            <span class="token number">30</span><span class="token punctuation">,</span>
            <span class="token number">31</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;signBonusDaysList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token number">31</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,58),p=[d];function o(r,l){return n(),s("div",null,p)}const u=t(e,[["render",o],["__file","user.html.vue"]]);export{u as default};

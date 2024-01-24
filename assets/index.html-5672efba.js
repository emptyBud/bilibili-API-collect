import{_ as h,r as a,o as b,c as n,a as t,d as e,w as o,b as d,e as c}from"./app-08634687.js";const l="/bilibili-API-collect/assets/comment-d1bbcde2.svg",i={},s=t("h1",{id:"评论区",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#评论区","aria-hidden":"true"},"#"),d(" 评论区")],-1),m=t("img",{src:l,width:"100",height:"100"},null,-1),u=t("p",null,"评论系统为全站通用，且APP与web端接口共用，以type标明对象类型，以oid指向响应的对象id",-1),p=t("hr",null,null,-1),_=t("p",null,[t("strong",null,"继续查看：")],-1),y=c('<h2 id="评论区类型代码" tabindex="-1"><a class="header-anchor" href="#评论区类型代码" aria-hidden="true">#</a> 评论区类型代码</h2><p>（PS：以下部分内容来源不明，有待验证）</p><table><thead><tr><th>代码</th><th>评论区类型</th><th>oid 的意义</th></tr></thead><tbody><tr><td>1</td><td>视频稿件</td><td>稿件 avid</td></tr><tr><td>2</td><td>话题</td><td>话题 id</td></tr><tr><td>4</td><td>活动</td><td>活动 id</td></tr><tr><td>5</td><td>小视频</td><td>小视频 id</td></tr><tr><td>6</td><td>小黑屋封禁信息</td><td>封禁公示 id</td></tr><tr><td>7</td><td>公告信息</td><td>公告 id</td></tr><tr><td>8</td><td>直播活动</td><td>直播间 id</td></tr><tr><td>9</td><td>活动稿件</td><td>(?)</td></tr><tr><td>10</td><td>直播公告</td><td>(?)</td></tr><tr><td>11</td><td>相簿（图片动态）</td><td>相簿 id</td></tr><tr><td>12</td><td>专栏</td><td>专栏 cvid</td></tr><tr><td>13</td><td>票务</td><td>(?)</td></tr><tr><td>14</td><td>音频</td><td>音频 auid</td></tr><tr><td>15</td><td>风纪委员会</td><td>众裁项目 id</td></tr><tr><td>16</td><td>点评</td><td>(?)</td></tr><tr><td>17</td><td>动态（纯文字动态&amp;分享）</td><td>动态 id</td></tr><tr><td>18</td><td>播单</td><td>(?)</td></tr><tr><td>19</td><td>音乐播单</td><td>(?)</td></tr><tr><td>20</td><td>漫画</td><td>(?)</td></tr><tr><td>21</td><td>漫画</td><td>(?)</td></tr><tr><td>22</td><td>漫画</td><td>漫画 mcid</td></tr><tr><td>33</td><td>课程</td><td>课程 epid</td></tr></tbody></table><h2 id="评论条目对象" tabindex="-1"><a class="header-anchor" href="#评论条目对象" aria-hidden="true">#</a> 评论条目对象</h2><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>rpid</td><td>num</td><td>评论 rpid</td><td></td></tr><tr><td>oid</td><td>num</td><td>评论区对象 id</td><td></td></tr><tr><td>type</td><td>num</td><td>评论区类型代码</td><td><strong>类型代码见上表</strong></td></tr><tr><td>mid</td><td>num</td><td>发送者 mid</td><td></td></tr><tr><td>root</td><td>num</td><td>根评论 rpid</td><td>若为一级评论则为 0<br>大于一级评论则为根评论 id</td></tr><tr><td>parent</td><td>num</td><td>回复父评论 rpid</td><td>若为一级评论则为 0<br>若为二级评论则为根评论 rpid<br>大于二级评论为上一级评 论 rpid</td></tr><tr><td>dialog</td><td>num</td><td>回复对方 rpid</td><td>若为一级评论则为 0<br>若为二级评论则为该评论 rpid<br>大于二级评论为上一级评论 rpid</td></tr><tr><td>count</td><td>num</td><td>二级评论条数</td><td></td></tr><tr><td>rcount</td><td>num</td><td>回复评论条数</td><td></td></tr><tr><td>floor</td><td>num</td><td>评论楼层号</td><td><strong>注：若不支持楼层则无此项</strong></td></tr><tr><td>state</td><td>num</td><td>(?)</td><td></td></tr><tr><td>fansgrade</td><td>num</td><td>是否具有粉丝标签</td><td>0：无<br>1：有</td></tr><tr><td>attr</td><td>num</td><td>某属性位？</td><td></td></tr><tr><td>ctime</td><td>num</td><td>评论发送时间</td><td>时间戳</td></tr><tr><td>rpid_str</td><td>str</td><td>评论rpid</td><td>字串格式</td></tr><tr><td>root_str</td><td>str</td><td>根评论rpid</td><td>字串格式</td></tr><tr><td>parent_str</td><td>str</td><td>回复父评论rpid</td><td>字串格式</td></tr><tr><td>like</td><td>num</td><td>评论获赞数</td><td></td></tr><tr><td>action</td><td>num</td><td>当前用户操作状态</td><td>需要登录(Cookie 或 APP) <br>否则恒为 0<br>0：无<br>1：已点赞<br>2：已点踩</td></tr><tr><td>member</td><td>obj</td><td>评论发送者信息</td><td></td></tr><tr><td>content</td><td>obj</td><td>评论信息</td><td></td></tr><tr><td>replies</td><td>无效时：null<br>有效时：array</td><td>评论回复条目预览</td><td><strong>仅嵌套一层</strong><br>否则为 null</td></tr><tr><td>assist</td><td>num</td><td>(?)</td><td></td></tr><tr><td>folder</td><td>obj</td><td>折叠信息</td><td></td></tr><tr><td>up_action</td><td>obj</td><td>评论 UP 主操作信息</td><td></td></tr><tr><td>show_follow</td><td>bool</td><td>(?)</td><td></td></tr><tr><td>invisible</td><td>bool</td><td>评论是否被隐藏</td><td></td></tr><tr><td>card_label</td><td>obj</td><td>右上角卡片标签信息</td><td></td></tr><tr><td>reply_control</td><td>obj</td><td>评论提示文案信息</td><td></td></tr></tbody></table><p><code>评论条目</code>中的<code>member</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>str</td><td>发送者 mid</td><td></td></tr><tr><td>uname</td><td>str</td><td>发送者昵称</td><td></td></tr><tr><td>sex</td><td>str</td><td>发送者性别</td><td>男 女 保密</td></tr><tr><td>sign</td><td>str</td><td>发送者签名</td><td></td></tr><tr><td>avatar</td><td>str</td><td>发送者头像 url</td><td></td></tr><tr><td>rank</td><td>str</td><td>(?)</td><td></td></tr><tr><td>DisplayRank</td><td>str</td><td>(?)</td><td></td></tr><tr><td>level_info</td><td>obj</td><td>发送者等级</td><td></td></tr><tr><td>pendant</td><td>obj</td><td>发送者头像框信息</td><td></td></tr><tr><td>nameplate</td><td>obj</td><td>发送者勋章信息</td><td></td></tr><tr><td>official_verify</td><td>obj</td><td>发送者认证信息</td><td></td></tr><tr><td>vip</td><td>obj</td><td>发送者会员信息</td><td></td></tr><tr><td>fans_detail</td><td>无效时：null<br>有效时：obj</td><td>发送者粉丝标签</td><td></td></tr><tr><td>following</td><td>num</td><td>是否关注该用户</td><td>需要登录(Cookie或APP) <br>否则恒为0<br>0：未关注<br>1：已关注</td></tr><tr><td>is_followed</td><td>num</td><td>是否被该用户关注</td><td>需要登录(Cookie或APP) <br>否则恒为0<br>0：未关注<br>1：已关注</td></tr><tr><td>user_sailing</td><td>obj</td><td>发送者评论条目装扮信息</td><td></td></tr><tr><td>is_contractor</td><td>bool</td><td>是否为合作用户？</td><td></td></tr><tr><td>contract_desc</td><td>str</td><td>合作用户说明？</td><td></td></tr></tbody></table><p><code>member</code>中的<code>level_info</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>current_level</td><td>num</td><td>用户等级</td><td></td></tr><tr><td>current_min</td><td>num</td><td>0</td><td></td></tr><tr><td>current_exp</td><td>num</td><td>0</td><td></td></tr><tr><td>next_exp</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><code>member</code>中的<code>pendant</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>pid</td><td>num</td><td>头像框 id</td><td></td></tr><tr><td>name</td><td>str</td><td>头像框名称</td><td></td></tr><tr><td>image</td><td>str</td><td>头像框图片 url</td><td></td></tr><tr><td>expire</td><td>num</td><td>0</td><td></td></tr><tr><td>image_enhance</td><td>str</td><td>头像框图片 url</td><td></td></tr><tr><td>image_enhance_frame</td><td>str</td><td>(?)</td><td></td></tr></tbody></table><p><code>member</code>中的<code>nameplate</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>nid</td><td>num</td><td>勋章 id</td><td></td></tr><tr><td>name</td><td>str</td><td>勋章名称</td><td></td></tr><tr><td>image</td><td>str</td><td>挂件图片 url 正常</td><td></td></tr><tr><td>image_small</td><td>str</td><td>勋章图片 url 小</td><td></td></tr><tr><td>level</td><td>str</td><td>勋章等级</td><td></td></tr><tr><td>condition</td><td>str</td><td>勋章条件</td><td></td></tr></tbody></table><p><code>member</code>中的<code>official_verify</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>是否认证</td><td>-1：无<br>0：个人认证<br>1：机构认证</td></tr><tr><td>desc</td><td>str</td><td>认证信息</td><td>无为空</td></tr></tbody></table><p><code>member</code>中的<code>vip</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>vipType</td><td>num</td><td>大会员类型</td><td>0：无<br>1：月会员<br>2：年以上会员</td></tr><tr><td>vipDueDate</td><td>num</td><td>大会员到期时间</td><td>毫秒 时间戳</td></tr><tr><td>dueRemark</td><td>str</td><td>(?)</td><td></td></tr><tr><td>accessStatus</td><td>num</td><td>(?)</td><td></td></tr><tr><td>vipStatus</td><td>num</td><td>大会员状态</td><td>0：无<br>1：有</td></tr><tr><td>vipStatusWarn</td><td>str</td><td>(?)</td><td></td></tr><tr><td>theme_type</td><td>num</td><td>会员样式 id</td><td></td></tr><tr><td>label</td><td>obj</td><td>会员铭牌样式</td><td></td></tr><tr><td>avatar_subscript</td><td>num</td><td>(?)</td><td></td></tr><tr><td>avatar_subscript_url</td><td>str</td><td>(?)</td><td></td></tr><tr><td>nickname_color</td><td>str</td><td>昵称颜色</td><td></td></tr></tbody></table><p><code>vip</code>中的<code>label</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>path</td><td>str</td><td>(?)</td><td></td></tr><tr><td>text</td><td>str</td><td>会员类型文案</td><td></td></tr><tr><td>label_theme</td><td>str</td><td>会员类型</td><td>vip：大会员<br>annual_vip：年度大会员<br>ten_annual_vip：十年大会员<br>hundred_annual_vip：百年大会员</td></tr><tr><td>text_color</td><td>str</td><td>文字颜色?</td><td></td></tr><tr><td>bg_style</td><td>num</td><td>(?)</td><td></td></tr><tr><td>bg_color</td><td>str</td><td>背景颜色?</td><td></td></tr><tr><td>border_color</td><td>str</td><td>描边颜色?</td><td></td></tr></tbody></table><p><code>member</code>中的<code>fans_detail</code>对象:</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>uid</td><td>num</td><td>用户 mid</td><td></td></tr><tr><td>medal_id</td><td>num</td><td>粉丝标签 id</td><td></td></tr><tr><td>medal_name</td><td>str</td><td>粉丝标签名</td><td></td></tr><tr><td>score</td><td>num</td><td>(?)</td><td></td></tr><tr><td>level</td><td>num</td><td>当前标签等级</td><td></td></tr><tr><td>intimacy</td><td>num</td><td>(?)</td><td></td></tr><tr><td>master_status</td><td>num</td><td>(?)</td><td></td></tr><tr><td>is_receive</td><td>num</td><td>(?)</td><td></td></tr></tbody></table><p><code>member</code>中的<code>user_sailing</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>pendant</td><td>无效时：null<br>有效时：obj</td><td>头像框信息</td><td></td></tr><tr><td>cardbg</td><td>无效时：null<br>有效时：obj</td><td>评论卡片装扮</td><td></td></tr><tr><td>cardbg_with_focus</td><td>null</td><td>(?)</td><td></td></tr></tbody></table><p><code>user_sailing</code>中的<code>pendant</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>头像框 id</td><td></td></tr><tr><td>name</td><td>str</td><td>头像框名称</td><td></td></tr><tr><td>image</td><td>str</td><td>头像框图片 url</td><td></td></tr><tr><td>jump_url</td><td>str</td><td>空</td><td></td></tr><tr><td>type</td><td>str</td><td>装扮类型</td><td>suit：一般装扮<br>vip_suit：vip 装扮</td></tr><tr><td>image_enhance</td><td>str</td><td>(?)</td><td></td></tr><tr><td>image_enhance_frame</td><td>str</td><td>(?)</td><td></td></tr></tbody></table><p><code>user_sailing</code>中的<code>cardbg</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>评论条目装扮 id</td><td></td></tr><tr><td>name</td><td>str</td><td>评论条目装扮名称</td><td></td></tr><tr><td>image</td><td>str</td><td>评论条目装扮图片 url</td><td></td></tr><tr><td>jump_url</td><td>str</td><td>评论条目装扮商城页面 url</td><td></td></tr><tr><td>fan</td><td>obj</td><td>粉丝专属信息</td><td></td></tr><tr><td>type</td><td>str</td><td>装扮类型</td><td>suit：一般装扮<br>vip_suit：vip 装扮</td></tr></tbody></table><p><code>cardbg</code>中的<code>fan</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>is_fan</td><td>num</td><td>是否为粉丝专属装扮</td><td>0：否<br>1：是</td></tr><tr><td>number</td><td>num</td><td>粉丝专属编号</td><td></td></tr><tr><td>color</td><td>str</td><td>数字颜色</td><td>颜色码</td></tr><tr><td>name</td><td>str</td><td>装扮名称</td><td></td></tr><tr><td>num_desc</td><td>str</td><td>粉丝专属编号</td><td>字串格式</td></tr></tbody></table><p><code>评论条目</code>中的<code>content</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>message</td><td>str</td><td>评论内容</td><td><strong>重要</strong></td></tr><tr><td>plat</td><td>num</td><td>评论发送端</td><td>1：web端<br>2：安卓客户端<br>3：ios 客户端<br>4：wp 客户端</td></tr><tr><td>device</td><td>str</td><td>评论发送平台设备</td><td></td></tr><tr><td>members</td><td>array</td><td>at 到的用户信息</td><td></td></tr><tr><td>emote</td><td>obj</td><td>需要渲染的表情转义</td><td>评论内容无表情则无此项</td></tr><tr><td>jump_url</td><td>obj</td><td>需要高亮的超链转义</td><td></td></tr><tr><td>max_line</td><td>num</td><td>6</td><td>收起最大行数</td></tr><tr><td>pictures</td><td>array</td><td>评论图片数组</td><td></td></tr></tbody></table><p><code>content</code>中的<code>members</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>at到的用户 1</td><td>基本同<code>评论条目</code>中的<code>member</code>对象</td></tr><tr><td>n</td><td>obj</td><td>at到的用户 (n+1)</td><td>项数为at到的不同的用户数</td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>content</code>中的<code>emote</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>{表情转义符}</td><td>obj</td><td>表情转义符信息 1</td><td></td></tr><tr><td>……</td><td>obj</td><td>表情转义符信息 n</td><td>向下扩展</td></tr></tbody></table><p><code>emote</code>中的<code>{表情转义符}</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>表情 id</td><td></td></tr><tr><td>package_id</td><td>num</td><td>表情包 id</td><td></td></tr><tr><td>state</td><td>num</td><td>0</td><td></td></tr><tr><td>type</td><td>num</td><td>表情类型</td><td>1：免费<br>2：会员专属<br>3：购买所得<br>4：颜文字</td></tr><tr><td>attr</td><td>num</td><td>(?)</td><td></td></tr><tr><td>text</td><td>str</td><td>表情转义符</td><td></td></tr><tr><td>url</td><td>str</td><td>表情图片 url</td><td></td></tr><tr><td>meta</td><td>obj</td><td>属性信息</td><td></td></tr><tr><td>mtime</td><td>num</td><td>表情创建时间</td><td>时间戳</td></tr><tr><td>jump_title</td><td>str</td><td>表情名称</td><td></td></tr></tbody></table><p><code>{表情转义符}</code>中的<code>meta</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>size</td><td>num</td><td>表情尺寸信息</td><td>1：小<br>2：大</td></tr><tr><td>alias</td><td>str</td><td>简写名</td><td>无则无此项</td></tr></tbody></table><p><code>content</code>中的<code>jump_url</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>{超链转义}</td><td>obj</td><td>超链转义信息 1</td><td></td></tr><tr><td>……</td><td>obj</td><td>超链转义信息 n</td><td>向下扩展</td></tr></tbody></table><p><code>jump_url</code>中的<code>{超链转义}</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>str</td><td>标题</td><td></td></tr><tr><td>state</td><td>num</td><td>图标 url</td><td></td></tr><tr><td>prefixIcon</td><td>str</td><td>(?)</td><td></td></tr><tr><td>appUrlSchema</td><td>str</td><td>(?)</td><td></td></tr><tr><td>appName</td><td>str</td><td>(?)</td><td></td></tr><tr><td>appPackageName</td><td>str</td><td>(?)</td><td></td></tr><tr><td>clickReport</td><td>str</td><td>上报 id</td><td></td></tr></tbody></table><p><code>content</code>中的<code>pictures</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>img_src</td><td>str</td><td>图片地址</td><td></td></tr><tr><td>img_width</td><td>num</td><td>图片宽度</td><td></td></tr><tr><td>img_height</td><td>num</td><td>图片高度</td><td></td></tr><tr><td>img_size</td><td>num</td><td>图片大小</td><td>单位KB</td></tr></tbody></table><p><code>评论条目</code>中的<code>replies</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>回复条目1</td><td><strong>为本对象的递归嵌套</strong><br><strong>仅可嵌套一层</strong><br>按照热度顺序排列</td></tr><tr><td>1</td><td>obj</td><td>回复条目2</td><td></td></tr><tr><td>2</td><td>obj</td><td>回复条目3</td><td>最后一项</td></tr></tbody></table><p><code>评论条目</code>中的<code>folder</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>has_folded</td><td>bool</td><td>是否有被折叠的二级评论</td><td></td></tr><tr><td>is_folded</td><td>bool</td><td>评论是否被折叠</td><td></td></tr><tr><td>rule</td><td>str</td><td>相关规则页面 url</td><td></td></tr></tbody></table><p><code>评论条目</code>中的<code>up_action</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>like</td><td>bool</td><td>是否UP主觉得很赞</td><td>false：否<br>true：是</td></tr><tr><td>reply</td><td>bool</td><td>是否被UP主回复</td><td>false：否<br>true：是</td></tr></tbody></table><p><code>评论条目</code>中的<code>card_label</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>rpid</td><td>num</td><td>评论 rpid</td><td></td></tr><tr><td>text_content</td><td>str</td><td>标签文本</td><td>已知有<code>妙评</code></td></tr><tr><td>text_color_day</td><td>str</td><td>日间文本颜色</td><td>十六进制颜色值，下同</td></tr><tr><td>text_color_night</td><td>str</td><td>夜间文本颜色</td><td></td></tr><tr><td>label_color_day</td><td>str</td><td>日间标签颜色</td><td></td></tr><tr><td>label_color_night</td><td>str</td><td>夜间标签颜色</td><td></td></tr><tr><td>image</td><td>str</td><td></td><td>作用不明</td></tr><tr><td>type</td><td>str</td><td>1</td><td>作用不明</td></tr><tr><td>background</td><td>str</td><td>背景图片 url</td><td></td></tr><tr><td>background_width</td><td>num</td><td>背景图片宽度</td><td></td></tr><tr><td>background_height</td><td>num</td><td>背景图片高度</td><td></td></tr><tr><td>jump_url</td><td>str</td><td>跳转链接</td><td></td></tr><tr><td>effect</td><td>num</td><td>0</td><td>作用不明，可能用于控制动画，下同</td></tr><tr><td>effect_start_time</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><code>评论条目</code>中的<code>reply_control</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>sub_reply_entry_text</td><td>str</td><td>回复提示</td><td><code>共 xx 条回复</code></td></tr><tr><td>sub_reply_title_text</td><td>str</td><td>回复提示</td><td><code>相关回复共有 xx 条</code></td></tr><tr><td>time_desc</td><td>str</td><td>时间提示</td><td><code>xx 天/小时 前发布</code></td></tr><tr><td>location</td><td>str</td><td>IP属地</td><td><code>IP属地：xx</code><br>评论者发送评论时的IP地址属地<br>仅对2022-07-25 11:00及以后发布的评论有效<br>需要登录</td></tr></tbody></table>',55);function g(f,j){const r=a("RouterLink");return b(),n("div",null,[s,m,u,p,_,t("ul",null,[t("li",null,[e(r,{to:"/docs/comment/list.html"},{default:o(()=>[d("查询类")]),_:1})]),t("li",null,[e(r,{to:"/docs/comment/action.html"},{default:o(()=>[d("操作类")]),_:1})])]),y])}const x=h(i,[["render",g],["__file","index.html.vue"]]);export{x as default};

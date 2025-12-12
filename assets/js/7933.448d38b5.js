"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["7933"],{83616:function(t,e,a){function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:()=>r}),(0,a(31566).K2)(r,"populateCommonDb")},63308:function(t,e,a){a.d(e,{diagram:()=>g});var r=a(88573),i=a(83616),l=a(70361),s=a(32521),o=a(31566),n=a(79432),c=s.UI.packet,d=class{constructor(){this.packet=[],this.setAccTitle=s.SV,this.getAccTitle=s.iN,this.setDiagramTitle=s.ke,this.getDiagramTitle=s.ab,this.getAccDescription=s.m7,this.setAccDescription=s.EI}static{(0,o.K2)(this,"PacketDB")}getConfig(){let t=(0,l.$t)({...c,...(0,s.zj)().packet});return t.showBits&&(t.paddingY+=10),t}getPacket(){return this.packet}pushWord(t){t.length>0&&this.packet.push(t)}clear(){(0,s.IU)(),this.packet=[]}},k=(0,o.K2)((t,e)=>{(0,i.S)(t,e);let a=-1,r=[],l=1,{bitsPerRow:s}=e.getConfig();for(let{start:i,end:n,bits:c,label:d}of t.blocks){if(void 0!==i&&void 0!==n&&n<i)throw Error(`Packet block ${i} - ${n} is invalid. End must be greater than start.`);if((i??=a+1)!==a+1)throw Error(`Packet block ${i} - ${n??i} is not contiguous. It should start from ${a+1}.`);if(0===c)throw Error(`Packet block ${i} is invalid. Cannot have a zero bit field.`);for(n??=i+(c??1)-1,c??=n-i+1,a=n,o.Rm.debug(`Packet block ${i} - ${a} with label ${d}`);r.length<=s+1&&e.getPacket().length<1e4;){let[t,a]=p({start:i,end:n,bits:c,label:d},l,s);if(r.push(t),t.end+1===l*s&&(e.pushWord(r),r=[],l++),!a)break;({start:i,end:n,bits:c,label:d}=a)}}e.pushWord(r)},"populate"),p=(0,o.K2)((t,e,a)=>{if(void 0===t.start)throw Error("start should have been set during first phase");if(void 0===t.end)throw Error("end should have been set during first phase");if(t.start>t.end)throw Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*a)return[t,void 0];let r=e*a-1,i=e*a;return[{start:t.start,end:r,label:t.label,bits:r-t.start},{start:i,end:t.end,label:t.label,bits:t.end-i}]},"getNextFittingBlock"),h={parser:{yy:void 0},parse:(0,o.K2)(async t=>{let e=await (0,n.qg)("packet",t),a=h.parser?.yy;if(!(a instanceof d))throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");o.Rm.debug(e),k(e,a)},"parse")},b=(0,o.K2)((t,e,a,i)=>{let l=i.db,o=l.getConfig(),{rowHeight:n,paddingY:c,bitWidth:d,bitsPerRow:k}=o,p=l.getPacket(),h=l.getDiagramTitle(),b=n+c,u=b*(p.length+1)-(h?0:n),g=d*k+2,y=(0,r.D)(e);for(let[t,e]of(y.attr("viewbox",`0 0 ${g} ${u}`),(0,s.a$)(y,u,g,o.useMaxWidth),p.entries()))f(y,e,t,o);y.append("text").text(h).attr("x",g/2).attr("y",u-b/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),f=(0,o.K2)((t,e,a,{rowHeight:r,paddingX:i,paddingY:l,bitWidth:s,bitsPerRow:o,showBits:n})=>{let c=t.append("g"),d=a*(r+l)+l;for(let t of e){let e=t.start%o*s+1,a=(t.end-t.start+1)*s-i;if(c.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),c.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!n)continue;let l=t.end===t.start,k=d-2;c.append("text").attr("x",e+(l?a/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",l?"middle":"start").text(t.start),l||c.append("text").attr("x",e+a).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}},"drawWord"),u={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},g={parser:h,get db(){return new d},renderer:{draw:b},styles:(0,o.K2)(({packet:t}={})=>{let e=(0,l.$t)(u,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles")}}}]);
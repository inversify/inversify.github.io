"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["1402"],{68691(e,t,a){function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a(86682).K)(i,"populateCommonDb")},80689(e,t,a){a.d(t,{diagram:()=>k});var i=a(68691),l=a(20502),r=a(62841),s=a(21152),n=a(96580),o=a(86682),c=a(14394),d=a(79809),p=s.UI.pie,h={sections:new Map,showData:!1,config:p},g=h.sections,u=h.showData,f=structuredClone(p),m=(0,o.K)(()=>structuredClone(f),"getConfig"),$=(0,o.K)(()=>{g=new Map,u=h.showData,(0,s.IU)()},"clear"),x=(0,o.K)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(e)||(g.set(e,t),n.R.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),w=(0,o.K)(()=>g,"getSections"),y=(0,o.K)(e=>{u=e},"setShowData"),S=(0,o.K)(()=>u,"getShowData"),v={getConfig:m,clear:$,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:x,getSections:w,setShowData:y,getShowData:S},b=(0,o.K)((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),C={parse:(0,o.K)(async e=>{let t=await (0,c.qg)("pie",e);n.R.debug(t),b(t,v)},"parse")},D=(0,o.K)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),T=(0,o.K)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),a=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1);return(0,d.rLf)().value(e=>e.value).sort(null)(a)},"createPieArcs"),k={parser:C,db:v,renderer:{draw:(0,o.K)((e,t,a,i)=>{n.R.debug("rendering pie chart\n"+e);let o=i.db,c=(0,s.D7)(),p=(0,r.$t)(o.getConfig(),c.pie),h=(0,l.D)(t),g=h.append("g");g.attr("transform","translate(225,225)");let{themeVariables:u}=c,[f]=(0,r.I5)(u.pieOuterStrokeWidth);f??=2;let m=p.legendPosition,$=p.textPosition,x=p.donutHole>0&&p.donutHole<=.9?p.donutHole:0,w=(0,d.JLW)().innerRadius(185*x).outerRadius(185),y=(0,d.JLW)().innerRadius(185*$).outerRadius(185*$),S=g.append("g");S.append("circle").attr("cx",0).attr("cy",0).attr("r",185+f/2).attr("class","pieOuterCircle");let v=o.getSections(),b=T(v),C=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],D=0;v.forEach(e=>{D+=e});let k=b.filter(e=>"0"!==(e.data.value/D*100).toFixed(0)),A=(0,d.UMr)(C).domain([...v.keys()]);S.selectAll("mySlices").data(k).enter().append("path").attr("d",w).attr("fill",e=>A(e.data.label)).attr("class",e=>{let t="pieCircle";return"hover"===p.highlightSlice?t+=" highlightedOnHover":p.highlightSlice===e.data.label&&(t+=" highlighted"),t}),S.selectAll("mySlices").data(k).enter().append("text").text(e=>(e.data.value/D*100).toFixed(0)+"%").attr("transform",e=>"translate("+y.centroid(e)+")").style("text-anchor","middle").attr("class","slice");let K=g.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText"),R=[...v.entries()].map(([e,t])=>({label:e,value:t})),O=g.selectAll(".legend").data(R).enter().append("g").attr("class","legend");O.append("rect").attr("width",18).attr("height",18).style("fill",e=>A(e.label)).style("stroke",e=>A(e.label)),O.append("text").attr("x",22).attr("y",14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let _=Math.max(...O.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0)),M=450,z=490,W=22*R.length;switch(m){case"center":O.attr("transform",(e,t)=>"translate("+(-_/2-22)+","+(22*t-22*R.length/2)+")");break;case"top":M+=W,O.attr("transform",(e,t)=>`translate(${-_/2-22}, ${22*t-185})`),S.attr("transform",()=>`translate(0, ${W+22})`);break;case"bottom":M+=W,O.attr("transform",(e,t)=>"translate("+(-_/2-22)+","+(22*t- -207)+")");break;case"left":z+=22+_,O.attr("transform",(e,t)=>"translate(-207,"+(22*t-22*R.length/2)+")"),S.attr("transform",()=>`translate(${_+18+4}, 0)`);break;default:z+=22+_,O.attr("transform",(e,t)=>"translate(216,"+(22*t-22*R.length/2)+")")}let F=K.node()?.getBoundingClientRect().width??0,H=Math.min(0,225-F/2),L=Math.max(z,225+F/2)-H;h.attr("viewBox",`${H} 0 ${L} ${M}`),(0,s.a$)(h,M,L,p.useMaxWidth)},"draw")},styles:D}}}]);
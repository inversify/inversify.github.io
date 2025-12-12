"use strict";(self.webpackChunk_inversifyjs_inversify_docs_site=self.webpackChunk_inversifyjs_inversify_docs_site||[]).push([["5406"],{83616:function(e,t,i){function a(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}i.d(t,{S:()=>a}),(0,i(31566).K2)(a,"populateCommonDb")},43981:function(e,t,i){i.d(t,{diagram:()=>b});var a=i(88573),l=i(83616),r=i(70361),s=i(32521),n=i(31566),o=i(79432),c=i(59334),p=s.UI.pie,d={sections:new Map,showData:!1,config:p},u=d.sections,f=d.showData,g=structuredClone(p),h=(0,n.K2)(()=>structuredClone(g),"getConfig"),m=(0,n.K2)(()=>{u=new Map,f=d.showData,(0,s.IU)()},"clear"),x=(0,n.K2)(({label:e,value:t})=>{if(t<0)throw Error(`"${e}" has invalid value: ${t}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,t),n.Rm.debug(`added new section: ${e}, with value: ${t}`))},"addSection"),w=(0,n.K2)(()=>u,"getSections"),S=(0,n.K2)(e=>{f=e},"setShowData"),y=(0,n.K2)(()=>f,"getShowData"),$={getConfig:h,clear:m,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:x,getSections:w,setShowData:S,getShowData:y},v=(0,n.K2)((e,t)=>{(0,l.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)},"populateDb"),D={parse:(0,n.K2)(async e=>{let t=await (0,o.qg)("pie",e);n.Rm.debug(t),v(t,$)},"parse")},T=(0,n.K2)(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
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
`,"getStyles"),C=(0,n.K2)(e=>{let t=[...e.values()].reduce((e,t)=>e+t,0),i=[...e.entries()].map(([e,t])=>({label:e,value:t})).filter(e=>e.value/t*100>=1).sort((e,t)=>t.value-e.value);return(0,c.rLf)().value(e=>e.value)(i)},"createPieArcs"),b={parser:D,db:$,renderer:{draw:(0,n.K2)((e,t,i,l)=>{n.Rm.debug("rendering pie chart\n"+e);let o=l.db,p=(0,s.D7)(),d=(0,r.$t)(o.getConfig(),p.pie),u=(0,a.D)(t),f=u.append("g");f.attr("transform","translate(225,225)");let{themeVariables:g}=p,[h]=(0,r.I5)(g.pieOuterStrokeWidth);h??=2;let m=d.textPosition,x=(0,c.JLW)().innerRadius(0).outerRadius(185),w=(0,c.JLW)().innerRadius(185*m).outerRadius(185*m);f.append("circle").attr("cx",0).attr("cy",0).attr("r",185+h/2).attr("class","pieOuterCircle");let S=o.getSections(),y=C(S),$=[g.pie1,g.pie2,g.pie3,g.pie4,g.pie5,g.pie6,g.pie7,g.pie8,g.pie9,g.pie10,g.pie11,g.pie12],v=0;S.forEach(e=>{v+=e});let D=y.filter(e=>"0"!==(e.data.value/v*100).toFixed(0)),T=(0,c.UMr)($);f.selectAll("mySlices").data(D).enter().append("path").attr("d",x).attr("fill",e=>T(e.data.label)).attr("class","pieCircle"),f.selectAll("mySlices").data(D).enter().append("text").text(e=>(e.data.value/v*100).toFixed(0)+"%").attr("transform",e=>"translate("+w.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),f.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");let b=[...S.entries()].map(([e,t])=>({label:e,value:t})),k=f.selectAll(".legend").data(b).enter().append("g").attr("class","legend").attr("transform",(e,t)=>"translate(216,"+(22*t-22*b.length/2)+")");k.append("rect").attr("width",18).attr("height",18).style("fill",e=>T(e.label)).style("stroke",e=>T(e.label)),k.append("text").attr("x",22).attr("y",14).text(e=>o.getShowData()?`${e.label} [${e.value}]`:e.label);let A=512+Math.max(...k.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));u.attr("viewBox",`0 0 ${A} 450`),(0,s.a$)(u,450,A,d.useMaxWidth)},"draw")},styles:T}}}]);
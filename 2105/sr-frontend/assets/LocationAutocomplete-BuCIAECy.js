import{L as i,ab as u,r as t,aJ as m,J as o,an as b,aC as p,as as C}from"./index-DgPqxWA-.js";function d({locKey:n,setLocKey:l}){const{t:r}=i(["character","charNames_gen"]),{database:e}=u(),c=t.useCallback(a=>!!e.chars.get(e.chars.LocationToCharacterKey(a)),[e.chars]),s=t.useCallback(a=>e.charMeta.get(e.charMeta.LocationToCharacterKey(a)).favorite,[e.charMeta]),h=t.useMemo(()=>[{key:"",label:r("character:autocomplete.none")},...m.map(a=>({key:a,label:r(`charNames_gen:${a}`),favorite:s(a),color:c(a)?void 0:"secondary"}))],[c,s,r]);return o(t.Suspense,{fallback:o(b,{variant:"text",width:100}),children:o(p,{options:h,toImg:()=>o(C,{children:" "}),valueKey:n,onChange:a=>l(a??"")})})}export{d as L};

import{u as s,n as a,p as t,J as i,N as l,T as e,Q as o,L as h,bG as u,K as d}from"./index-a029e1d3.js";import{d as f}from"./Settings-8097999a.js";import{d as n}from"./StarDisplay-047b5c19.js";import{I as c}from"./ImgFullwidth-a45e675d.js";import{S as m}from"./SqBadge-bfc80ff8.js";import{S as p}from"./ArtifactSort-1f030424.js";import{L as g}from"./Link-cf76ff06.js";import"./DropdownButton-44b540e0.js";import"./ColoredText-1bf7287f.js";import"./index-51068192.js";import"./LocationAutocomplete-0c41bb99.js";import"./Help-4a15df1c.js";import"./SlotIcon-91574b1e.js";import"./InfoTooltip-1aabf14f.js";import"./index-1914d476.js";import"./Artifact-caedb912.js";import"./CardActionArea-5956ffa7.js";const y=""+new URL("artifactcard-0ab236a8.png",import.meta.url).href,v=""+new URL("artifacteditor-3d54b9ef.png",import.meta.url).href,b=""+new URL("artifactfilter-9f57e827.png",import.meta.url).href;function x(){return t(d,{display:"inline-flex",gap:.3,sx:{height:"1.5em"},children:u(0,5).map(r=>t(p,{color:`roll${r+1}.main`,value:(r+1)/6*100},r))})}function U(){const{t:r}=s("artifact");return a(i,{container:!0,spacing:1,children:[t(i,{item:!0,xs:12,lg:5,xl:4,children:t(c,{src:y})}),t(i,{item:!0,xs:12,lg:7,xl:8,children:a(l,{t:r,i18nKey:"info.section1",children:[t(e,{variant:"h5",children:"Substat rolls"}),a(e,{gutterBottom:!0,children:["The ",t("b",{children:"number of rolls"})," a substat has is shown to the left of the substat. As the number gets higher, the substat is more colorful:",t(x,{}),"."]}),t(e,{variant:"h5",children:"Substat Roll Value"}),a(e,{gutterBottom:!0,children:["The Roll Value(RV) of an subtat is a percentage of the current value over the highest potential 5",t(n,{...o}),"value. From the Image, the maximum roll value of CRIT DMG is 7.8%. In RV: ",t("b",{children:"5.8/7.8 = 69.2%."})]}),t(e,{variant:"h5",children:"Current Roll Value vs. Maximum Roll Value"}),a(e,{gutterBottom:!0,children:["When a 5",t(n,{...o})," have 9(4+5) total rolls, with each of the rolls having the highest value, that is defined as a 900% RV artifact. However, most of the artifacts are not this lucky. The ",t("b",{children:"Current RV"})," of an artifact is a percentage over that 100% artifact. The ",t("b",{children:"Maximum RV"})," is the maximum possible RV an artifact can achieve, if the remaining artifact rolls from upgrades are the hightest possible value."]})]})}),t(i,{item:!0,xs:12,lg:6,xl:7,children:a(l,{t:r,i18nKey:"info.section2",children:[t(e,{variant:"h5",children:"Artifact Editor"}),a(e,{gutterBottom:!0,children:["A fully featured artifact editor, that can accept any 3",t(n,{...o})," to 5",t(n,{...o})," Artifact. When a substat is inputted, it can calculate the exact roll values. It will also make sure that you have the correct number of rolls in the artifact according to the level, along with other metrics of validation."]}),t(e,{variant:"h5",children:"Scan screenshots"}),a(e,{gutterBottom:!0,children:["Manual input is not your cup of tea? You can scan in your artifacts with screenshots! On the Artifact Editor, click the",t(m,{color:"info",children:"Show Me How!"})," button to learn more."]}),t(e,{variant:"h6",children:"Automatic Artifact Scanner"}),a(e,{gutterBottom:!0,children:["If you are playing Genshin on PC, you can download a tool that automatically scans all your artifacts for you, and you can then import that data in ",t(f,{...o})," Database.",t(g,{component:h,to:"/scanner",children:"Click here"}),"for a list of scanners that are compatible with GO."]}),t(e,{variant:"h5",children:"Duplicate/Upgrade artifact detection"}),a(e,{children:["Did you know GO can detect if you are adding a ",t("b",{children:"duplicate"}),"artifact that exists in the system? It can also detect if the current artifact in editor is an ",t("b",{children:"upgrade"})," of an existing artifact as well. Once a duplicate/upgrade is detected, a preview will allow you to compare the two artifacts in question(See Image)."]})]})}),t(i,{item:!0,xs:12,lg:6,xl:5,children:t(c,{src:v})}),t(i,{item:!0,xs:12,lg:7,xl:6,children:t(c,{src:b})}),t(i,{item:!0,xs:12,lg:5,xl:6,children:a(l,{t:r,i18nKey:"info.section3",children:[t(e,{variant:"h5",children:"Artifact Inventory"}),a(e,{gutterBottom:!0,children:["All your artifacts that you've added to GO are displayed here. The filters here allow you to further refine your view of your artifacts."," "]}),t(e,{variant:"h5",children:"Example: Finding Fodder Artifacts"}),t(e,{children:"By utilizing the artifact filter, and the artifact RV, you can quickly find artifacts to feed as food."}),t(e,{children:"In this example, the filters are set thusly: "}),t(e,{component:"div",children:a("ul",{children:[t("li",{children:"Limit level to 0-8."}),t("li",{children:"Unlocked artifacts in Inventory."}),t("li",{children:"Removing the contribution of flat HP, flat DEF and Energy Recharge to RV calculations."}),t("li",{children:"Sorted by Ascending Max Roll Value."})]})}),t(e,{children:"This will filter the artifact Inventory by the lowest RV artifacts, for desired substats."})]})})]})}export{U as default};

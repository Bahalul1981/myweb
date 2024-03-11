- INSTALL AND USE FONTAWESOM & BLUEPRINT FOR ICONS

1. INSTAL FONTAWESOM:
   npm i --save @fortawesome/fontawesome-svg-core
   npm i --save @awesome.me/kit-KIT_CODE // TO USE PRO ICONS
   npm i --save @fortawesome/react-fontawesome@latest

2. INSTALL BLUEPRINT:
   npm install --save @blueprintjs/core @blueprintjs/icons
   OR:
   npm install --save @blueprintjs/core

3. THEN GO TO INDEX.JS IN SRC FOLDER AND WRAP WITH THESE CODE:

   import "normalize.css";
   import "@blueprintjs/core/lib/css/blueprint.css";
   import "@blueprintjs/icons/lib/css/blueprint-icons.css";
   // THIS LINE BELOW TO IMPORT ICONS FORM FONT AWESOME AND APPLY TO WHOLE APPLIACTION
   import "@fortawesome/fontawesome-free/css/all.min.css"; (END POINT WILL BE YOUR MAIN CSS FOLDER)

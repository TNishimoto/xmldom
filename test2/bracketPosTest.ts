import xmldom = require('xmldom-alpha');

var xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<scxml version  =  "" ver=3',
  '       profile="ecmascript" id="scxmlRoot" initial="start">',
  '',
  '  <!--',
  '      some comment (next line is empty)',
  '',
  '  -->',
  '',
  '  <state id="start" name="start">',
  '    <transition event"init" name="init" target="main_state" />',
  '  </state>',
  '',
  '  </scxml>'
].join('\n')

var errors = [];
var parser = new xmldom.DOMParser({
  errorHandler: function (key, msg) {
    (<any>errors).push(key, msg)
  }
});
var dom = parser.parseFromString(xml, 'text/xml')

function testAttr(attr: xmldom.Attr, parentName : string) {
  console.log(`${parentName} attr: ${xml.substring(attr.nameRange.start, attr.nameRange.end)}, ${xml.substring(attr.valueRange.start, attr.valueRange.end)}` )
  console.log(attr.valueRange)
  //console.log(`${parentName} attr: ${xml.substring(attr.valueRange.start, attr.valueRange.end)}`)

}
function testElement(node: xmldom.Element) {
  //console.log(node.startBracketInfo.bracketRange.start + "/" + node.startBracketInfo.bracketRange.end)
  if (node.attributes != null) {
    for (let i = 0; i < node.attributes.length; i++) {
      const attr: xmldom.Attr = <xmldom.Attr>node.attributes.item(i);
      testAttr(attr, node.nodeName);
    }
  }
  if (node.childNodes != null) {
    for (let i = 0; i < node.childNodes.length; i++) {
      const el: xmldom.Element = <xmldom.Element>node.childNodes.item(i);
      testElement(el);
    }
  }
  if(node.startBracketRange != undefined){
    console.log(xml.substring(node.startBracketRange.start, node.startBracketRange.end))
  }
  if(node.endBracketRange != undefined){
    console.log(xml.substring(node.endBracketRange!.start, node.endBracketRange!.end))
  }
}
testElement(dom.documentElement);
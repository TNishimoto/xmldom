//export namespace XML {
export enum NodeType {
	ELEMENT_NODE = 1,
	ATTRIBUTE_NODE = 2,
	TEXT_NODE = 3,
	CDATA_SECTION_NODE = 4,
	ENTITY_REFERENCE_NODE = 5,
	ENTITY_NODE = 6,
	PROCESSING_INSTRUCTION_NODE = 7,
	COMMENT_NODE = 8,
	DOCUMENT_NODE = 9,
	DOCUMENT_TYPE_NODE = 10,
	DOCUMENT_FRAGMENT_NODE = 11,
	NOTATION_NODE = 12
}
export type TextRange = { start: number, end: number };
//export type StartBracketInfo = { bracketRange : TextRange, tagNameRange? : TextRange }
//export type EndBracketInfo = { bracketRange : TextRange, tagNameRange? : TextRange }

export type DOMString = any;
export type NodeList = any;
//export type NamedNodeMap = any;
//export type Document = any;
export interface NamedNodeMap {
	getNamedItem(name: DOMString): Node;
	setNamedItem(arg: Node): Node
	//raises(DOMException);
	removeNamedItem(name: DOMString): Node
	//raises(DOMException);
	item(index: number): Node;
	length: number;
	// Introduced in DOM Level 2:
	getNamedItemNS(namespaceURI: DOMString,
		localName: DOMString): Node;
	// Introduced in DOM Level 2:
	setNamedItemNS(arg: Node)
	//									  raises(DOMException);
	// Introduced in DOM Level 2:
	removeNamedItemNS(namespaceURI: DOMString,
		localName: DOMString): Node
	//									  raises(DOMException);
};

export interface Node {

	nodeName: DOMString;
	nodeValue: DOMString;

	nodeType: NodeType;
	parentNode: Node;
	childNodes: NodeList;
	firstChild: Node;
	lastChild: Node;
	previousSibling: Node;
	nextSibling: Node;
	attributes: NamedNodeMap;
	// Modified in DOM Level 2:
	ownerDocument: Document;
	insertBefore(newChild: Node, refChild: Node): Node
	//									  raises(DOMException);
	replaceChild(newChild: Node, oldChild: Node): Node
	//									  raises(DOMException);
	removeChild(oldChild: Node): Node
	//									  raises(DOMException);
	appendChild(newChild: Node): Node
	//										  raises(DOMException);
	hasChildNodes(): boolean;
	cloneNode(deep: boolean): Node;
	// Modified in DOM Level 2:
	normalize(): void;
	// Introduced in DOM Level 2:
	isSupported(feature: DOMString, version: DOMString): boolean;
	// Introduced in DOM Level 2:
	namespaceURI: DOMString;
	// Introduced in DOM Level 2:
	prefix: DOMString;
	// raises(DOMException) on setting

	// Introduced in DOM Level 2:
	localName: DOMString;
	// Introduced in DOM Level 2:
	hasAttributes(): boolean;
};

export interface Element extends Node {
	tagName: DOMString;
	getAttribute(name: DOMString): DOMString;
	setAttribute(name: DOMString, value: DOMString): void;
	//									  raises(DOMException);
	removeAttribute(name: DOMString): void;
	//									  raises(DOMException);
	getAttributeNode(name: DOMString): Attr;
	setAttributeNode(newAttr: Attr): Attr;
	//									  raises(DOMException);
	removeAttributeNode(oldAttr: Attr): Attr
	//									  raises(DOMException);
	getElementsByTagName(name: DOMString): NodeList;
	// Introduced in DOM Level 2:
	getAttributeNS(namespaceURI: DOMString, localName: DOMString): DOMString;
	// Introduced in DOM Level 2:
	setAttributeNS(namespaceURI: DOMString, qualifiedName: DOMString, value: DOMString): void
	//									  raises(DOMException);
	// Introduced in DOM Level 2:
	removeAttributeNS(namespaceURI: DOMString,
		localName: DOMString): void
	//									  raises(DOMException);
	// Introduced in DOM Level 2:
	getAttributeNodeNS(namespaceURI: DOMString,
		localName: DOMString): Attr;
	// Introduced in DOM Level 2:
	setAttributeNodeNS(newAttr: Attr): Attr
	//									  raises(DOMException);
	// Introduced in DOM Level 2:
	getElementsByTagNameNS(namespaceURI: DOMString, localName: DOMString): NodeList;
	// Introduced in DOM Level 2:
	hasAttribute(name: DOMString): boolean;
	// Introduced in DOM Level 2:
	hasAttributeNS(namespaceURI: DOMString, localName: DOMString): boolean;

	startBracketRange: TextRange
	startTagNameRange: TextRange
	endBracketRange?: TextRange
	endTagNameRange?: TextRange
};
export interface Document extends Node {
	docType: any;
	implementation: any;
	documentElement: any;
	documentURI: string;
	createElement(tagName: DOMString): Element
	createDocumentFragment(): any
	createTextNode(data: DOMString): any
	createComment(data: DOMString): any
	createCDATASection(data: DOMString): any
	createProcessingInstruction(target: DOMString, data: DOMString): any
	createAttribute(name: DOMString): Attr
	createEntityReference(name: DOMString): any
	getElementsByTagName(tagname: DOMString): NodeList
	importNode(importedNode: Node, deep: boolean): Node
	createElementNS(namespaceURI: DOMString, qualifiedName: DOMString): Element
	createAttributeNS(namespaceURI: DOMString, qualifiedName: DOMString): Attr
	getElementsByTagNameNS(namespaceURI: DOMString, localName: DOMString): NodeList
	getElementById(elementId: DOMString): Element
}
export interface Attr extends Node {
	name: DOMString;
	specified: boolean;
	value: DOMString;
	// raises(DOMException) on setting

	// Introduced in DOM Level 2:
	ownerElement: Element;

	nameRange: TextRange
	valueRange: TextRange
};

//}
import type { PortableTextBlock } from "@portabletext/react"

const input: PortableTextBlock = {
	_key: "R5FvMrjo",
	_type: "block",
	children: [
		{
			_key: "cZUQGmh4",
			_type: "span",
			marks: [],
			text: "A word of warning; "
		},
		{
			_key: "toaiCqIK",
			_type: "span",
			marks: ["someLinkId"],
			text: "Sanity"
		},
		{
			_key: "gaZingA",
			_type: "span",
			marks: [],
			text: " is addictive."
		}
	],
	markDefs: [
		{
			_type: "link",
			_key: "someLinkId",
			href: "https://sanity.io/"
		}
	],
	style: "normal"
}

export default input

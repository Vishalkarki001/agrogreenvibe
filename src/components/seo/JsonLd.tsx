// JSON-LD structured data ko page me inject karta hai.
// Server component hai — HTML me seedha render hota hai, isliye Google ko
// crawl ke waqt hi mil jaata hai (client JS ka wait nahi karna padta).

interface JsonLdProps {
  /** Ek schema object ya unka array. */
  data: object | object[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify ka output HTML-safe banate hain: "</script>" jaisa
          // sequence content me aa jaye to page toot sakta hai.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

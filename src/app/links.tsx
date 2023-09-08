export default function Links() {
   return <div className='mt-5 flex gap-x-2 justify-center items-center'>
      <Link url='https://github.com/abbrcode'>Org</Link>
      •
      <Link url='https://github.com/abbrcode/abbreviations-in-code'>Abbreviations in code</Link>
      •
      <Link url='https://github.com/T1xx1/AbbrExt'>AbbrExt</Link>
   </div>;

}

function Link({
   url,
   children
}: {
   url: string;
   children: string;
}) {
   return <a
      href={url}
      className='text-3xl text-accent font-bold hover:underline'
   >{children}</a>;
}
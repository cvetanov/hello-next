// This is the Link API
import Link from 'next/link';
import { useState } from 'react';

const Index = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <Link href='/about'>
        <a title='About Page'>About Page</a>
      </Link>
      <p>Hello Next.js</p>
      <span>{text}</span>
      <input onChange={(e) => setText(e.target.value)} value={text} />
    </div>
  );
};

export default Index;

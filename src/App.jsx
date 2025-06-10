import { useState, useEffect } from 'react'
import GridCard from "./GridCard"

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <h1> ⛪ All you need to know about Psalms Devotionals</h1>
          <h3>Experience Jesus in every part of Psalms. View the devotional to guide you through each section of the book.</h3>
        </div>
      </header>

      <div className="App">      
        <div className="grid-container">
          <div className="hover-indicator">
            <span>Hover over image to read more</span>
            <svg className="arrow" width="358" height="168" viewBox="0 0 358 168" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.9999 8.62257C95.2435 69.6904 213.162 109.456 324.536 106.688" stroke="#D0D0D0" strokeWidth="7" strokeLinecap="round"/>
              <path d="M276.234 54.8723C298.451 85.988 326.91 106.629 353.527 105.968" stroke="#D0D0D0" strokeWidth="7" strokeLinecap="round"/>
              <path d="M278.868 160.84C299.512 128.659 326.91 106.629 353.527 105.968" stroke="#D0D0D0" strokeWidth="7" strokeLinecap="round"/>
            </svg>
          </div>
          <GridCard
            title="Psalm 1"
            smalltitle="A Tree Planted By Streams Of Water"
            description="Psalm 1 shows us that Jesus is our river of living water. Anyone who loves him will be like a thriving tree."
            image="./src/assets/IMG_1.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-1#read"
          />
          <GridCard
            title="Psalm 2"
            smalltitle="The One Who Sits In Heaven Laughs"
            description="In Psalm 2 we see Jesus as the ultimate heir to David's throne, and God's final anointed king. Jesus is now ruling and frustrating the plans of all our enemies."
            image="./src/assets/IMG_2.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-2#read"
          />
          <GridCard
            title="Psalm 3"
            smalltitle="You Lift My Head"
            description="In Psalm 3 we see a foreshadow of Jesus. Jesus would one day be betrayed and surrounded by enemies. But the good news is that through Jesus' death, David's prayer comes true! Because of Jesus we can be comforted and rescued."
            image="./src/assets/IMG_3.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-3#read"
          />
          <GridCard
            title="Psalm 4"
            smalltitle="Let The Light Of Your Face Shine On Us"
            description="In Psalm 4 we see that Jesus is better than false gods because he is God himself, and unlike our idols he conquers death and delivers us from crisis."
            image="./src/assets/IMG_4.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-4#read"
          />
          <GridCard
            title="Psalm 5"
            smalltitle="Their Throat Is An Open Grave"
            description="In Psalm 5 we see that when Jesus died, the barrier that separated us from God's presence is torn down. All of us can be rescued from our enemies when we take refuge in Jesus."
            image="./src/assets/IMG_5.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-5#read"
          />
          <GridCard
            title="Psalm 6"
            smalltitle="How Long O Lord"
            description="In Psalm 6 David cries out “how long o lord!” For Christians, the answer is–now! Jesus' love and God’s glory come to our aid whenever we call to him."
            image="./src/assets/IMG_6.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-6#read"
          />
          <GridCard
            title="Psalm 7"
            smalltitle="I Take Refuge In You"
            description="In Psalm 7 we begin to see Jesus as the once who confirms our innocence and judges the false claims made against us on the cross."
            image="./src/assets/IMG_7.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-7#read"
          />
          <GridCard
            title="Psalm 8"
            smalltitle="What Is Mankind That You Are Mindful Of Him?"
            description="In Psalm 8 we see that God doesn't just care about his creation, he cares enough to enter into his creation. The almighty God becomes human in Jesus!"
            image="./src/assets/IMG_8.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-8#read"
          />
          <GridCard
            title="Psalm 9-10"
            smalltitle="The Lord Reigns Forever"
            description="In Psalm 9-10 we see that Jesus is the judge of the whole earth."
            image="./src/assets/IMG_9.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-9-10#read"
          />
          <GridCard
            title="Psalm 11"
            smalltitle="Why Do You Hide Yourself?"
            description="In Psalm 11 we see Jesus as the one who fights our enemies and is our refuge."
            image="./src/assets/IMG_10.jpg"
            link="https://www.spokengospel.com/devotionals/psalm-11#read"
          />
        </div>
      </div>
        
    </>
  )
}

export default App

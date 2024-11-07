//useLocation är en hook som returnerar ett objekt med information om den aktuella URL:en som användaren befinner sig på och pathname är den egenskap som innehåller den specifika vägen till den nuvarande vyn. Genom att använda pathname som beroendevariabel körs useEffect varje gång anvädaren byter till en ny vy. Null returneras för att tala om för React att inget behöver renderas men att effekten ändå ska köras.
import { useEffect } from 'react';
import { useLocation }from 'react-router-dom';

export function ScrollToTop () {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
    document.documentElement.style.scrollBehavior = 'auto';//återställer scrolleffekt.
  }, [pathname]);

  return null;
}

export default ScrollToTop;


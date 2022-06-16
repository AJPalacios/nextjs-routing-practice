import EvenList from "../components/events/event-list";
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents()
  console.log(featuredEvents);
  return(
    <div>
      <EvenList items={featuredEvents} />
    </div>
  )
}

export default HomePage;

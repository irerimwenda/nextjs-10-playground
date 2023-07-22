import TvSeries from "../components/TvSeries";
import Movies from "../components/Movies";
import Animes from "../components/Animes";

export default function Home() {
  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#homeTabContent" role="tablist">
          <li className="mr-2" role="presentation">
            <button className="inline-block p-4 border-b-2 rounded-t-lg" id="tv-series-tab" data-tabs-target="#tv-series"
                    type="button" role="tab" aria-controls="tv-series" aria-selected="false">
              TV Series
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="movies-tab" data-tabs-target="#movies" type="button" role="tab" aria-controls="movies"
                aria-selected="false">
              Movies
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="animes-tab" data-tabs-target="#animes" type="button" role="tab" aria-controls="animes"
                aria-selected="false">
              Animes
            </button>
          </li>
        </ul>
      </div>

      <div id="homeTabContent">
        <div className="hidden" id="tv-series" role="tabpanel" aria-labelledby="tv-series-tab">
          <TvSeries/>
        </div>

        <div className="hidden" id="movies" role="tabpanel" aria-labelledby="movies-tab">
          <Movies/>
        </div>

        <div className="hidden" id="animes" role="tabpanel" aria-labelledby="animes-tab">
          <Animes/>
        </div>
      </div>
    </>
  )
}

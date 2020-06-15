import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

const episodes = [
    {
        airdate: "2016-07-15",
        airstamp: "2016-07-15T12:00:00+00:00",
        airtime: "",
        id: 553946,
        image: {
          medium:
            "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        },
        name: "Chapter One: The Vanishing of Will Byers",
        number: 1,
        runtime: 60,
        season: 1,
        summary:
          "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        url:
          "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
      },
      
]

test("renders episodes",async () => {
  const { rerender, getAllByTestId, findByText, findByAltText } = render(<Episodes episodes={episodes} />);

  

  const episodeName = await findByText(/Chapter One: The Vanishing of Will Byers/i)
  const episodeImage = await findByAltText(/Chapter One: The Vanishing of Will Byers/i)

  expect(episodeName).toBeInTheDocument()
  expect(episodeImage).toBeInTheDocument()

  //   const episodes = getAllByTestId(/episode/i);
});

import React, { useEffect, useState } from "react";
import axios from "axios";
import RowDetailsNews from "./RowDetailsNews";
function Array_News({news,setNews}) {
  //const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("https://io.trustensia.com/api/news")
      .then((response) => setNews(response.data))
      .catch((error) => console.error("Error fetching calendars:", error));
  }, []);
  useEffect(() => {
    console.log("News updated:", news);
  }, [news]);
  return (
    <div class="col-8-xxxl col-12">
      <div class="card height-auto">
        <div class="card-body">
          <div class="heading-layout1">
            <div class="item-title">
              <h3>Actualités</h3>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table display data-table text-nowrap">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Descriptions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {news.map(({ _id, title, description, image }) => (
                  <RowDetailsNews
                    key={_id}
                    _id={_id}
                    title={title}
                    description={description}
                    image={image}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Array_News;

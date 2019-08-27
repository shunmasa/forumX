import React, { Component } from "react";
import "./rule.css";
class Rule extends Component {
  render() {
    return (
      <div className="wrapper-rule">
        <div className="section-rule">
          <div classNmae="title-rule">
            <div className="number-rule">Rule Book</div>
            <h2>Rule 1</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            magnam molestias natus labore reprehenderit in, dolore officiis
            deleniti sit qui dignissimos ut quas doloremque nesciunt laboriosam
            pariatur expedita error? Ex.
          </p>
        </div>

        <div className="section-rule" >
          <div className="title-rule">
            <div className="number"></div>
            <h2>Rule 2</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            minus accusantium dolores vel error at, sequi tempore, quis
            veritatis dolorum hic tenetur necessitatibus, ab veniam illo beatae.
            Sed, natus accusamus!
          </p>
        </div>

        <div className="section-rule">
          <div className="title-rule">
            <div className="number"></div>
            <h2>Rule 3</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, natus
            quam, aperiam et facilis fugiat velit molestias sint incidunt
            explicabo doloribus dicta facere amet sed aliquam quo nulla ab quos!
          </p>
        </div>
        <div className="section-rule" >
          <div className="title-rule">
            <div className="number"></div>
            <h2>Rule 4</h2>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            ea ad? Maiores, enim dicta. Voluptatum temporibus id eaque fuga sunt
            obcaecati nostrum quidem optio, non, esse eveniet laborum aperiam
            quas.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            dolorem praesentium natus suscipit excepturi libero placeat
            obcaecati consequatur maiores vitae laborum omnis ducimus hic sint
            eum at, dignissimos, amet delectus.
          </p>
        </div>
      </div>
    );
  }
}

export default Rule;

import "./Introduction.scss";
import introimg from "../../assets/img_intro01.jpg";

function Introduction() {
  return (
    <section className="introduction">
      <div className="h2">
        <h2 className="h2-title">Introduction</h2>
      </div>

      <div className="content">
        <div className="left">
          <img className="left-img" src={introimg} alt="introimg" />
        </div>
        <div className="right">
          <p class="tit">Overview</p>
          <p class="text">
            Battle gigantic monsters in epic locales.
            <br />
            <br />
            As a hunter, you'll take on quests to hunt monsters in a variety of
            habitats.
            <br />
            Take down these monsters and receive materials that you can use to
            create stronger weapons and armor in order to hunt even more
            dangerous monsters.
            <br />
            <br />
            In Monster Hunter Armor Website you can manually select the weapon
            in build your own button to create your own build, it will display
            the detail of armor you pick and the skills associated with it.
            Beside you can also explore the details of weapon and armor detail
            in Arsenal button.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Introduction;

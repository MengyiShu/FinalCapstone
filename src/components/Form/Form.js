import "./Form.scss";
import weaponicon from "../../assets/greatsword-icon.png";
import headicon from "../../assets/head-icon.png";
import chesticon from "../../assets/chest-icon.png";
import handsicon from "../../assets/hands-icon.png";
import legicon from "../../assets/legs-icon.png";
import feeticon from "../../assets/feet-icon.png";
import charmicon from "../../assets/charm-icon.png";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Select from "react-select";
import weaponSelect from "../WeaponList/WeaponList";
import logo from "../../assets/Monster-Hunter-World-Logo.png";

function Form() {
  const defaultSharpness = {
    red: 0,
    orange: 0,
    yellow: 0,
    green: 0,
    blue: 0,
    white: 0,
    purple: 0,
  };
  const defaultResistance = {
    dragon: 0,
    fire: 0,
    ice: 0,
    thunder: 0,
    water: 0,
  };
  const [weaponList, setWeaponList] = useState(null);
  const [weapon, setWeapon] = useState(null);
  const [weaponInfo, setWeaponInfo] = useState(null);
  const [armorList, setArmorList] = useState(null);
  const headList = [];
  const chestList = [];
  const glovesList = [];
  const waistList = [];
  const legList = [];
  const [headInfo, setHeadInfo] = useState(null);
  const [glovesInfo, setGlovesInfo] = useState(null);
  const [chestInfo, setChestInfo] = useState(null);
  const [waistInfo, setWaistInfo] = useState(null);
  const [legInfo, setLegInfo] = useState(null);
  const [charmList, setCharmList] = useState(null);
  const [charmInfo, setCharmInfo] = useState(null);
  const [glove, setGlove] = useState(null);
  const [head, setHead] = useState(null);
  const [chest, setChest] = useState(null);
  const [waist, setWaist] = useState(null);
  const [leg, setLeg] = useState(null);
  const [charm, setCharm] = useState(null);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [maxdefense, setMaxDefense] = useState(0);
  const [sharpness, setSharpness] = useState(defaultSharpness);
  const [resistance, setResistance] = useState(defaultResistance);
  const [skills, setSkills] = useState("there has no skills yet");

  useEffect(() => {
    axios
      .get("https://mhw-db.com/charms")
      .then((response) => {
        setCharmList(response.data);
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://mhw-db.com/weapons")
      .then((response) => {
        setWeaponList(response.data);
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://mhw-db.com/armor")
      .then((response) => {
        setArmorList(response.data);
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  }, []);
  function findWeapon(list, weapon) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === weapon) {
        setWeaponInfo(list[i]);
      }
    }
  }
  function findhead(list, armor) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === armor) {
        setHeadInfo(list[i]);
      }
    }
  }
  function findchest(list, armor) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === armor) {
        setChestInfo(list[i]);
      }
    }
  }
  function findwaist(list, armor) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === armor) {
        setWaistInfo(list[i]);
      }
    }
  }
  function findgloves(list, armor) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === armor) {
        setGlovesInfo(list[i]);
      }
    }
  }
  function findleg(list, armor) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === armor) {
        setLegInfo(list[i]);
      }
    }
  }
  function findcharm(list, armor) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === armor) {
        setCharmInfo(list[i]);
      }
    }
  }
  function armorSetup(list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].type === "head") {
        headList.push(list[i]);
      }
      if (list[i].type === "chest") {
        chestList.push(list[i]);
      }
      if (list[i].type === "gloves") {
        glovesList.push(list[i]);
      }
      if (list[i].type === "waist") {
        waistList.push(list[i]);
      }
      if (list[i].type === "legs") {
        legList.push(list[i]);
      }
    }
  }

  if (armorList) {
    armorSetup(armorList);
  }
  function buildOption(list) {
    const result = [];
    if (list) {
      for (let i = 0; i < list.length; i++) {
        const singleOption = { value: list[i].name, label: list[i].name };
        result.push(singleOption);
      }
    }
    return result;
  }
  function handleWeaponChange(selected) {
    setWeapon(selected.value);
    findWeapon(weaponList, selected.value);
  }
  function handleHeadChange(selected) {
    setHead(selected.value);
    findhead(headList, selected.value);
  }
  function handleChestChange(selected) {
    setChest(selected.value);
    findchest(chestList, selected.value);
  }
  function handleGloveChange(selected) {
    setGlove(selected.value);
    findgloves(glovesList, selected.value);
  }
  function handleWaistChange(selected) {
    setWaist(selected.value);
    findwaist(waistList, selected.value);
  }
  function handleLegChange(selected) {
    setLeg(selected.value);
    findleg(legList, selected.value);
  }
  function handleCharmChange(selected) {
    setCharm(selected.value);
    findcharm(charmList, selected.value);
  }

  const weaponOptions = buildOption(weaponList);
  const headOptions = buildOption(headList);
  const gloveOptions = buildOption(glovesList);
  const chestOptions = buildOption(chestList);
  const waistOptions = buildOption(waistList);
  const legOptions = buildOption(legList);
  const charmOptions = buildOption(charmList);
  function handleonClick() {
    console.log("clicked");
    setAttack(weaponInfo.attack.display);
    const currentSharpness = weaponInfo.durability[0];
    setSharpness(weaponInfo.durability[0]);
    if (headInfo && glovesInfo && chestInfo && waistInfo && legInfo) {
      const total =
        headInfo.defense["base"] +
        glovesInfo.defense["base"] +
        chestInfo.defense["base"] +
        waistInfo.defense["base"] +
        legInfo.defense["base"];
      console.log(total);
      setDefense(total);
    }
    if (headInfo && glovesInfo && chestInfo && waistInfo && legInfo) {
      const total =
        headInfo.defense["max"] +
        glovesInfo.defense["max"] +
        chestInfo.defense["max"] +
        waistInfo.defense["max"] +
        legInfo.defense["max"];
      console.log(total);
      setMaxDefense(total);
    }
    if (headInfo && glovesInfo && chestInfo && waistInfo && legInfo) {
      const waterR =
        headInfo.resistances.water +
        glovesInfo.resistances.water +
        chestInfo.resistances.water +
        waistInfo.resistances.water +
        legInfo.resistances.water;
      const fireR =
        headInfo.resistances.fire +
        glovesInfo.resistances.fire +
        chestInfo.resistances.fire +
        waistInfo.resistances.fire +
        legInfo.resistances.fire;
      const iceR =
        headInfo.resistances.ice +
        glovesInfo.resistances.ice +
        chestInfo.resistances.ice +
        waistInfo.resistances.ice +
        legInfo.resistances.ice;
      const dragonR =
        headInfo.resistances.dragon +
        glovesInfo.resistances.dragon +
        chestInfo.resistances.dragon +
        waistInfo.resistances.dragon +
        legInfo.resistances.dragon;
      const thunderR =
        headInfo.resistances.thunder +
        glovesInfo.resistances.thunder +
        chestInfo.resistances.thunder +
        waistInfo.resistances.thunder +
        legInfo.resistances.thunder;

      const currentResistnace = {
        water: waterR,
        ice: iceR,
        thunder: thunderR,
        fire: fireR,
        dragon: dragonR,
      };
      setResistance(currentResistnace);
    }
    if (headInfo && glovesInfo && chestInfo && waistInfo && legInfo) {
      var headskill = "";
      var glovesskill = "";
      var chestskill = "";
      var legskill = "";
      var waistskill = "";

      console.log(headInfo.skills[0]);
      if (headInfo.skills[0].skillName) {
        headskill = headInfo.skills[0].skillName + " , ";
      }
      if (glovesInfo.skills[0]) {
        glovesskill = glovesInfo.skills[0].skillName + " , ";
      }
      if (chestInfo.skills[0]) {
        chestskill = chestInfo.skills[0].skillName + " , ";
      }
      if (waistInfo.skills[0]) {
        waistskill = waistInfo.skills[0].skillName + " , ";
      }
      if (legInfo.skills[0]) {
        legskill = legInfo.skills[0].skillName + " , ";
      }
      const charmskill = charmInfo.ranks[0].skills[0].skillName;
      var allskills =
        headskill + glovesskill + chestskill + waist + legskill + charmskill;
      console.log(allskills);
      setSkills(allskills);
    }
  }
  function handleclear() {
    setAttack(0);
    setDefense(0);
    setMaxDefense(0);
    setSharpness(defaultSharpness);
    setSkills("there has no skills yet");
  }
  console.log(chestInfo);
  return (
    <section className="form">
      <form>
        <label htmlFor="weapon">
          <img className="slot-img" src={weaponicon} alt="weapon-icon" />
        </label>
        <Select options={weaponOptions} onChange={handleWeaponChange} />
        <br />
        <label htmlFor="head">
          <img className="slot-img" src={headicon} alt="head-icon" />
        </label>
        <Select options={headOptions} onChange={handleHeadChange} />
        <br />
        <label htmlFor="chest">
          <img className="slot-img" src={chesticon} alt="chest-icon" />
        </label>
        <Select options={chestOptions} onChange={handleChestChange} />
        <br />
        <label htmlFor="hand">
          <img className="slot-img" src={handsicon} alt="hand-icon" />
        </label>
        <Select options={gloveOptions} onChange={handleGloveChange} />
        <br />
        <label htmlFor="leg">
          <img className="slot-img" src={legicon} alt="leg-icon" />
        </label>
        <Select options={waistOptions} onChange={handleWaistChange} />
        <br />
        <label htmlFor="feet">
          <img className="slot-img" src={feeticon} alt="feet-icon" />
        </label>
        <Select options={legOptions} onChange={handleLegChange} />
        <br />
        <label for="charm">
          <img className="slot-img" src={charmicon} alt="charm-icon" />
        </label>
        <Select options={charmOptions} onChange={handleCharmChange} />
        <br />
      </form>
      <div className="result">
        <div className="h2">
          <h2 className="h2-title">Here is your Builds</h2>
        </div>
        <div className="property">
          <div className="section">
            <h3 className="h3">Attack Stauts</h3>
            <p className="para">Attack:{attack}</p>
          </div>
          <div className="section">
            <h3 className="h3">Sharpness</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th className="red">red</th>
                  <th className="orange">orange </th>
                  <th className="yellow">yellow</th>
                  <th className="green">green</th>
                  <th className="blue">blue</th>
                  <th className="white">white</th>
                  <th className="purple">purple</th>
                </tr>
                <tr>
                  <th className="number">{sharpness.red}</th>
                  <th className="number">{sharpness.orange}</th>
                  <th className="number">{sharpness.yellow}</th>
                  <th className="number">{sharpness.green}</th>
                  <th className="number">{sharpness.blue}</th>
                  <th className="number">{sharpness.white}</th>
                  <th className="number">{sharpness.purple}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section">
            <h3 className="h3">Defense status</h3>
            <p className="para">Defense min:{defense}</p>
            <p className="para">Defense max:{maxdefense}</p>
            <p className="para">Water Resistance:{resistance.water}</p>
            <p className="para">Fire Resistance:{resistance.fire}</p>
            <p className="para">Thunder Resistance:{resistance.thunder}</p>
            <p className="para">Ice Resistance:{resistance.ice}</p>
            <p className="para">Dragon Resistance:{resistance.dragon}</p>
          </div>
          <div className="section">
            <h3 className="h3">Skills</h3>
            <p className="para">{skills}</p>
          </div>
          <div className="result-button">
            <button className="resultbutton" onClick={handleonClick}>
              Finish Your Build
            </button>
            <button className="resultbutton" onClick={handleclear}>
              Clear current Build
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Form;

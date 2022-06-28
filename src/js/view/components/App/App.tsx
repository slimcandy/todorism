import React, { useCallback, useEffect } from "react";
import { Provider } from "react-redux";
import { useTranslation } from "react-i18next";
import { langLocales } from "../../../common/constants";
import store from "../../../stores/store";
import Panel from "../Panel/Panel";

import "../../../../styles/index.css";

function App() {
  const {i18n} = useTranslation();
  const cLanguage = useCallback(async (language: string) => {
    await i18n.changeLanguage(language).then();
  }, [i18n]);

  const onLangChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.value){
      void cLanguage(e.target.value);
    }else{
      void cLanguage("ru");
    }
  }, [cLanguage])

  useEffect(()=>{
    void cLanguage("ru")
  },[cLanguage])

  return (
    <Provider store={store}>

        <div style={{"width": 150, "padding": 12}}>
          <select className="select w-full select-xs w-full max-w-xs"
                  onChange={(e) => onLangChange(e)}>
            {
              langLocales.map((opt) => (
                <option key={opt.id}  value={opt.lang}>
                  {opt.title}</option>
              ))
            }
          </select>
        </div>

      <main>
        <Panel />
      </main>
    </Provider>
  );
}

export default App;

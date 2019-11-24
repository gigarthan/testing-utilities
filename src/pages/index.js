import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/global.css"

import StringJson from "../strings.json"

function getStrings() {
  const movieStrings = Object.values(StringJson)

  movieStrings.sort(() => Math.random() - 0.5)

  let str = ""

  for (const value of movieStrings) {
    const allStrings = value.reduce((pv, v) => v + pv, "")
    str += allStrings
  }

  return str
}

const copyToClipboard = str => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

const IndexPage = () => {
  const [stringLength, setStringLength] = useState("")
  const [randomString, setRandomString] = useState("")

  const generateString = () => {
    /**
     * @todo update random mechanism
     */

    const length = parseInt(stringLength)

    if (length !== NaN) {
      const str = getStrings()
      const random = str.slice(0, length)
      setRandomString(random)
    }
  }

  return (
    <Layout>
      <SEO title="Random Text Generator" />
      <h1 className="text-lg font-bold text-center">
        Random Text Generator with Movie Dialogues
      </h1>
      <div className="p-4 w-full flex ">
        <div className="container mx-auto border-2 border-b-4 border-r-4 border-solid border-black p-8">
          <div className="w-full flex flex-wrap">
            <div className="lg:w-1/4 w-full my-3 flex flex-wrap flex-col ">
              <div className="w-full">
                <input
                  className="w-full h-10 p-2 bg-gray-300 outline-none rounded border-b-2 border-gray-400 focus:border-black border-black border-solid "
                  placeholder="String Length"
                  value={stringLength}
                  onChange={e => setStringLength(e.target.value)}
                  type={"number"}
                />
              </div>
              <div className="py-4">
                <button
                  onClick={generateString}
                  className="w-full h-10 bg-black hover:bg-white hover:text-black border-2 border-black text-white rounded"
                >
                  Generate String
                </button>
              </div>
            </div>
            <div className="w-full lg:w-3/4 my-3">
              <textarea
                value={randomString}
                onChange={e => setRandomString(e.target.value)}
                className="lg:mx-3 rounded  h-64 max-h-64 min-h-64 bg-gray-300 p-2 w-full outline-none resize-none border-b-2 border-gray-400 focus:border-black border-black border-solid"
              ></textarea>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/4"></div>
            <div className="w-full lg:w-2/4 mx-3 pl-3">
              <button
                onClick={() => copyToClipboard(randomString)}
                className="border-2 border-black  p-2 rounded text-xs text-black hover:bg-black hover:text-white"
              >
                click to copy the string
              </button>
            </div>
            <div className="w-full lg:w-1/4">
              <div>
                {randomString.length ? (
                  <div className="bg-gray-300 p-2 rounded text-right">
                    {randomString.length} Characters
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

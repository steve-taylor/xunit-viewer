import React, { Component } from 'react';
import './App.css';

import xml2js from 'xml2js'

const data = `
<?xml version="1.0" encoding="UTF-8" ?>
    <testsuites>
        <!-- standard test suite -->
        <testsuite name="bacon_with_a_really_really_really_really_really_reallyreally_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_long_name" errors="666" tests="777" failures="888" time="0.021">
            <!-- standard props -->
            <properties>
                <property name="x" value="y" />
                <property name="a" value="b" />
            </properties>
            <!-- props with single value -->
            <properties>
                <property name="c" value="d" />
            </properties>
            <!-- Props with no values -->
            <properties>
            </properties>
            <!-- each kind of test case with a full message -->
            <testcase assertions="0" classname="bacon" name="bacon_with_a_really_really_really_really_really_reallyreally_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_really_long_name" time="0.001">
                <passed message="message" type="type">inner massage</passed>
            </testcase>
            <testcase name="has html" classname="HTML" time="0.00075">
                    <error message="<b>BOO</b>" type="<i>ARGH</i>">
                        Error found in line 77: &lt;script&gt;some garbage;&lt;/script&gt;
                </error>
            </testcase>
            <testcase assertions="0" classname="bacon" name="bacon with a really really really really really reallyreally really really really really really really really really really really really really really really really really really really really really really long name" time="0.001">
                <error message="message" type="type">Error found in line 77: &lt;script&gt;some garbage;&lt;/script&gt;</error>
            </testcase>
            <testcase assertions="0" classname="bacon" name="bacon 3" time="0.001">
                <skipped message="message" type="type">inner massage</skipped>
            </testcase>
            <testcase assertions="0" classname="bacon" name="bacon 4" time="0.001">
                <failure message="message" type="type">inner massage</failure>
            </testcase>
            <!-- test case with something on the inside but not in a wrapper-->
            <testcase assertions="0" classname="bacon" name="bacon 5" time="0.001">inner message</testcase>
            <!-- test case with nothing on the inside -->
            <testcase assertions="0" classname="bacon" name="bacon 6" time="0.001"></testcase>
            <!-- test case no keys but inner message-->
            <testcase>no name</testcase>
            <!-- test case no keys or inner message-->
            <testcase></testcase>
            <!-- test case with multiple messages -->
            <testcase name="bacon 7">
                <error message="message" type="type">inner massage</error>
                <error message="message" type="type">inner massage</error>
            </testcase>
            <!-- test case with no inner message but has a message and a type -->
            <testcase name="bacon 8">
                <failure message="message" type="type"></failure>
            </testcase>
            <!-- test case with no inner message but has only message -->
            <testcase name="bacon 9">
                <skipped message="message"></skipped>
            </testcase>
            <!-- test case with no inner message but has only type -->
            <testcase name="bacon 10">
                <skipped type="type"></skipped>
            </testcase>
            <!-- test case with html on the inside -->
            <testcase name="bacon 11">
                <error>&lt;i&gt;inner&lt;/i&gt;&lt;b&gt;message&lt;/b&gt;</error>
            </testcase>
            <!-- test case with html in the message and type -->
            <testcase name="bacon 12">
                <failure message="<b>message</b>" type="<i>type</i>"></failure>
            </testcase>
            <testcase assertions="0" classname="not bacon" name="bacon 2" time="0.001">
                <error message="message" type="type">inner massage</error>
            </testcase>
        </testsuite>
        <!-- test suite with only one of verything -->
        <testsuite name="one thing" errors="666" tests="777" failures="888" time="0.021">
            <properties>
                <property name="c" value="d" />
            </properties>
            <testcase assertions="0" name="test name" time="0.001">
                <error message="message" type="type">inner massage</error>
            </testcase>
        </testsuite>
        <!-- test suite with only one testcase -->
        <testsuite name="suite name single" errors="666" tests="777" failures="888" time="0.021">
            <testcase assertions="0" classname="suite name" name="test name" time="0.001">
                <error message="message" type="type">inner massage</error>
            </testcase>
        </testsuite>
        <!-- suite with no key values -->
        <testsuite>
            <testcase assertions="0" classname="no key values" name="test name" time="0.001">
                <error message="message" type="type">inner massage</error>
            </testcase>
        </testsuite>
        <!-- suite and test with no name -->
        <testsuite>
            <testcase assertions="0" name="I have no class name" time="0.001">
                <error message="message" type="type">inner massage</error>
            </testcase>
        </testsuite>
        <!-- test suite with nothing inside -->
        <testsuite name="nothing inside" errors="666" tests="777" failures="888" time="0.021"></testsuite>
        <!-- test suite with nothing inside and no keys-->
        <testsuite></testsuite>
        <!-- nested suites -->
        <testsuite name="parent">
            <testcase name="parent test"></testcase>
            <testsuite name="child one">
                <testcase name="child one test"></testcase>
            </testsuite>
            <testsuite name="child two">
                <testcase name="child two test"></testcase>
                <testsuite name="child of child two">
                    <testcase name="child of child two test"></testcase>
                </testsuite>
            </testsuite>
        </testsuite>
    </testsuites>
    `

const parse = (data) => new Promise((resolve, reject) => {
  xml2js.parseString(data, (err, result) => {
    if (err === null) resolve(result)
    else reject(err)
  })
})

class App extends Component {
  render() {
    parse(data)
    .then(res => {
      console.log(res)
    })
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

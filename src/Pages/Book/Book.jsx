import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import WishListed from "../../Component/ListedBook/WishListed";
import ReadListed from "../../Component/ListedBook/ReadListed";

function Book() {
    const [sotingType, setSotingType] = useState('');
    console.log(sotingType)
    
  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-2">
        <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          Short by
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={()=>setSotingType('pages')}>
            <a>Pages</a>
          </li>
          <li onClick={()=>setSotingType('rating')}>
            <a>Rating</a>
          </li>
        </ul>
      </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wishlist Book</Tab>
        </TabList>

        <TabPanel>
          <ReadListed sotingType={sotingType} />
        </TabPanel>
        <TabPanel>
          <WishListed sotingType={sotingType}  />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Book;

import React, { useContext } from "react";
import { BookContext } from "../../Component/Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import WishListed from "../../Component/ListedBook/WishListed";
import ReadListed from "../../Component/ListedBook/ReadListed";

function Book() {
 
  return (
    <div className="container mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wishlist Book</Tab>
        </TabList>
            
        <TabPanel>
          <ReadListed />
        </TabPanel>
        <TabPanel>
          <WishListed></WishListed>
        </TabPanel>
      </Tabs>
      
      
      
    </div>
  );
}

export default Book;

"use client";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { Grid } from "@mui/joy";
import SubList from "./sub-list";

type SubListItem = {
  subTitle: string;
  id: string;
  checked: boolean;
};

type DataItem = {
  title: string;
  subList: SubListItem[] | string;
};

export default function List() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [data, setData] = useState<DataItem[]>([
    {
      title: "Introduction to Data Structures",
      subList: [
        {
          subTitle:
            "What is Data Structure: Types, Classifications and Applications.",
          id: "what-is-data-and-classifications",
          checked: false,
        },
        {
          subTitle: "Introduction to Data Structures",
          id: "intro-data-structure",
          checked: false,
        },
        {
          subTitle: "Common operations on various Data Structures",
          id: "common-operations-on-data-structure",
          checked: false,
        },
      ],
    },
    {
      title: "Array Data Structure",
      subList: [
        {
          subTitle:
            "Search, Insert, and Delete in an Unsorted Array | Array Operations",
          id: "search-insert-delete-in-unsorted-array",
          checked: false,
        },
      ],
    },
    {
      title: "Linked List Data Structure",
      subList:
        "A linear collection of nodes where each node points to the next.",
    },
    {
      title: "Matrix Data Structure",
      subList: "A two-dimensional array of elements.",
    },
    {
      title: "Stack Data Structure",
      subList:
        "A collection of elements with LIFO (Last In, First Out) access.",
    },
    {
      title: "Queue Data Structure",
      subList:
        "A collection of elements with FIFO (First In, First Out) access.",
    },
    {
      title: "Binary Tree Data Structure",
      subList: "A tree structure where each node has at most two children.",
    },
    {
      title: "Binary Search Tree Data Structure",
      subList:
        "A binary tree where each node's left children are smaller, and right children are larger.",
    },
    {
      title: "Heap Data Structure",
      subList:
        "A special tree-based structure that satisfies the heap property.",
    },
    {
      title: "Hashing Data Structure",
      subList:
        "A technique to map data to fixed-size values using hash functions.",
    },
    {
      title: "Graph Data Structure",
      subList:
        "A collection of nodes (vertices) and edges connecting pairs of nodes.",
    },
    {
      title: "Advanced Data Structure",
      subList: "More complex structures like AVL trees, B-trees, etc.",
    },
  ]);
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleOnClick = (item: DataItem) => {
    if (selectedTitle === item.title) {
      setSelectedTitle(null);
    } else {
      setSelectedTitle(item.title);
    }
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    itemId: string
  ) => {
    const updatedData = data.map((dataItem) => {
      if (dataItem.title === selectedTitle && Array.isArray(dataItem.subList)) {
        const updatedSubList = dataItem.subList.map((subListItem) =>
          subListItem.id === itemId
            ? { ...subListItem, checked: event.target.checked }
            : subListItem
        );
        return { ...dataItem, subList: updatedSubList };
      }
      return dataItem;
    });

    setData(updatedData);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setSelectedTitle(null);
      }
    };

    const clickOutsideHandler = handleClickOutside as unknown as EventListener;

    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);

  return (
    <Grid ref={listRef} className="md:w-full lg:w-1/3">
      {!data || data.length === 0 ? (
        <Grid className="flex justify-center items-center w-full">
          loading apna college...
        </Grid>
      ) : (
        <Grid className="grid">
          {data.map((item, index) => (
            <Grid
              key={index}
              className="m-2 p-1 inline-flex flex-wrap items-start"
            >
              <Grid
                className="text-nowrap cursor-pointer"
                onClick={() => handleOnClick(item)}
              >
                <span className="font-semibold">{index + 1}.</span> {item.title}
              </Grid>
              {selectedTitle === item.title && Array.isArray(item.subList) && (
                <div className="lg:absolute lg:ml-4 lg:right-1/2">
                  <SubList list={item} handleOnChange={handleOnChange} />
                </div>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

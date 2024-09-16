import Detail from "@/components/details/index";

type DetailData = {
  leetCodeUrl: string;
  codeForceUrl: string;
  article: {
    description: string;
    articleUrl: string;
  };
  Level: string;
  youTubeUrl: string;
};

type Params = {
  details: keyof typeof details;
};

const details: Record<string, DetailData> = {
  "what-is-data-and-classifications": {
    leetCodeUrl: "",
    codeForceUrl: "",
    article: {
      description: `A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. Different basic and advanced types of data structures are used in almost every program or software system that has been developed. So we must have good knowledge of data structures. 
      Data structures are an integral part of computers used for the arrangement of data in memory. They are essential and responsible for organizing, processing, accessing, and storing data efficiently. But this is not all. Various types of data structures have their characteristics, features, applications, advantages, and disadvantages. So how do you identify a data structure that is suitable for a particular task? What is meant by the term ‘Data Structure’? How many types of data structures are there and what are they used for? We have got you covered. We have made a complete list of everything about what data structure is, what are the types of data structures, the classification of data structures, the applications of each data structure, and so on. In this article, we will discuss every aspect of each data structure to help you choose the best one in just minutes.`,
      articleUrl:
        "https://www.geeksforgeeks.org/what-is-data-structure-types-classifications-and-applications/",
    },
    Level: "easy",
    youTubeUrl: "https://www.youtube.com/embed/9IZYqostl2M?si=7lCmSa2t0C1PGGnY",
  },
  "intro-data-structure": {
    leetCodeUrl: "",
    codeForceUrl: "",
    article: {
      description: `The choice of a good data structure makes it possible to perform a variety of critical operations effectively. An efficient data structure also uses minimum memory space and execution time to process the structure. A data structure is not only used for organising the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge of data structures.

      Need Of Data Structure:
      The structure of the data and the synthesis of the algorithm are relative to each other. Data presentation must be easy to understand so the developer, as well as the user, can make an efficient implementation of the operation.
      Data structures provide an easy way of organising, retrieving, managing, and storing data.

      Here is a list of the needs for data.

      Data structure modification is easy. 
      It requires less time. 
      Save storage memory space. 
      Data representation is easy. 
      Easy access to the large database
      Classification/Types of Data Structures:
      Linear Data Structure
      Non-Linear Data Structure.
      Linear Data Structure:
      Elements are arranged in one dimension ,also known as linear dimension.
      Example: lists, stack, queue, etc.
      Non-Linear Data Structure
      Elements are arranged in one-many, many-one and many-many dimensions.
      Example: tree, graph, table, etc.`,
      articleUrl:
        "https://www.geeksforgeeks.org/introduction-to-data-structures/",
    },
    Level: "easy",
    youTubeUrl: "https://www.youtube.com/embed/9IZYqostl2M?si=7lCmSa2t0C1PGGnY",
  },
  "common-operations-on-data-structure": {
    leetCodeUrl: "",
    codeForceUrl: "",
    article: {
      description: `Data Structure is the way of storing data in computer’s memory so that it can be used easily and efficiently. There are different data-structures used for the storage of data. It can also be defined as a mathematical or logical model of a particular organization of data items. The representation of particular data structure in the main memory of a computer is called as storage structure. 

      For Examples: Array, Stack, Queue, Tree, Graph, etc.

      Operations on different Data Structure: 
      There are different types of operations that can be performed for the manipulation of data in every data structure. Some operations are explained and illustrated below: 

      Traversing: Traversing a Data Structure means to visit the element stored in it. It visits data in a systematic manner. This can be done with any type of DS. `,
      articleUrl:
        "https://www.geeksforgeeks.org/common-operations-on-various-data-structures/",
    },
    Level: "easy",
    youTubeUrl: "https://www.youtube.com/embed/9IZYqostl2M?si=7lCmSa2t0C1PGGnY",
  },
  "search-insert-delete-in-unsorted-array": {
    leetCodeUrl:
      "https://leetcode.com/problems/search-insert-position/description/",
    codeForceUrl: "",
    article: {
      description: `Search Operation:
      In an unsorted array, the search operation can be performed by linear traversal from the first element to the last element. `,
      articleUrl:
        "https://www.geeksforgeeks.org/search-insert-and-delete-in-an-unsorted-array/",
    },
    Level: "medium",
    youTubeUrl: "https://www.youtube.com/embed/9IZYqostl2M?si=7lCmSa2t0C1PGGnY",
  },
};

type Props = {
  params: Params;
};

export default function DetailPage({ params }: Props) {
  const selectedDetail = details[params.details];
  return <Detail detail={selectedDetail} />;
}

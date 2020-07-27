import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FileAttributes from "../components/sections/results/FileAttributes";

Enzyme.configure({adapter: new Adapter()});

const fileName = "TestFile.doc";
const fileSize = 20;
const fileType = "doc";

const mockFile = {name: fileName, size: fileSize};

describe("FileAttributes", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<FileAttributes file={mockFile} fileType={fileType}/>);
    expect(wrapper.exists()).toBe(true);
  });

  it("matches snapshot", () => {
    const wrapper = shallow(<FileAttributes file={mockFile} fileType={fileType}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it("contains a tr for FileName", () => {
    const wrapper = shallow(<FileAttributes file={mockFile} fileType={fileType}/>);
    expect(
      wrapper.contains(
        <tr>
            <td>File Name: </td>
            <td>{mockFile.name}</td>
        </tr>
      )
    ).toBe(true);
  });

  it("contains a tr for File Size", () => {
    const wrapper = shallow(<FileAttributes file={mockFile} fileType={fileType}/>);
    expect(
      wrapper.contains(
        <tr>
            <td>File Size: </td>
            <td>{mockFile.size}</td>
        </tr>
      )
    ).toBe(true);
  });

  it("contains a tr for File Type", () => {
    const wrapper = shallow(<FileAttributes file={mockFile} fileType={fileType}/>);
    expect(
      wrapper.contains(
        <tr>
            <td>Type: </td>
            <td>{fileType}</td>
        </tr>
      )
    ).toBe(true);
  });

  it("contains a TopMenu", () => {
    const wrapper = shallow(<FileAttributes file={mockFile} fileType={fileType}/>);
    expect(
      wrapper.contains(
        <div className="h1 table-header">File Attributes</div>
      )
    ).toBe(true);
  });
});

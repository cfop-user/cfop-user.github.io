from abc import ABC
from dataclasses import dataclass
from utils import count_leading_hashtags

class FormatError(BaseException): ...

class Page(ABC):
    '''
    Title: the name of the page, hierarchical. For example:
    "about-my-wip"

    Location: the destination folder of the webpage, as a relative 
    file path. for example:
    -  "/blog/entries/"
    -  "/"
    '''
    title: str
    location: str
    
    def get_title(self):
        raise NotImplementedError()

class Markdown(Page):
    TITLE_TAG = "!title: "
    LOCATION_TAG = "!path: "
    def __init__(self, location:str) -> None:
        super().__init__()
        self.raw_content = self.import_content(location)
        self.parse()

    def import_content(self, file_name:str):
        HEAD = "md-to-html/"
        file_name = HEAD + file_name
        with open(file_name, "r") as f:
            content = f.read().split("\n")
        return content

    def parse(self):
        self.extract_title()
        self.extract_write_location()
        self.extract_headings()

    def extract_title(self): 
        for line in self.raw_content:
            if not line.startswith("!"):
                break
            else:
                if line.startswith(self.TITLE_TAG):
                    self.title = line[len(self.TITLE_TAG):]
                    return
        raise FormatError("No title Given.")
   
    def extract_write_location(self):
        for line in self.raw_content:
            if not line.startswith("!"):
                break
            else:
                if line.startswith(self.LOCATION_TAG):
                    self.location = line[len(self.LOCATION_TAG):]
                    return
        raise FormatError("No file destination Given.")
   
    def extract_headings(self):
        headings = []

        for line in self.raw_content:
            lead_hashtag_count = count_leading_hashtags(line)
            if lead_hashtag_count > 0 and lead_hashtag_count <= 6:
                headings.append(
                    Heading(lead_hashtag_count, line[lead_hashtag_count+1:])
                )
            
        self.headings = headings

    def generate_output_file_path(self):
        return 

@dataclass
class Heading:
    level: int # 1-6
    content: str

@dataclass
class Link:
    display_text: str
    url: str

class HTML(Page):
    def __init__(self, markdown_file:Markdown) -> None:
        super().__init__()
        self.get_title()

    def get_title(self): 
        return ""
    
    def generate_output_file_path(self):
        return 
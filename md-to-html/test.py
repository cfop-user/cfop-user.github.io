import unittest as t
from main import FormatError, Markdown

class MainCase(t.TestCase):
    def testTitle(self):
        file = Markdown("test.md")
        self.assertEqual(file.title, "placeholder title")

    def testWriteLocation(self):
        file = Markdown("test.md")
        self.assertEqual(file.location, "placeholder/file/path")

    def testTitleBackwards(self):
        file = Markdown("swapped tags.md")
        self.assertEqual(file.title, "placeholder title")

    def testWriteLocationBackwards(self):
        file = Markdown("swapped tags.md")
        self.assertEqual(file.location, "placeholder/file/path")    
    
    def testBadTag(self):
        with self.assertRaises(FormatError):
            Markdown("bad-tag.md")


    def testHeadingNames(self):
        file = Markdown("test.md")
        expected = [
            "Main",
            "Main Ideas",
            "Smallest Heading"
        ]
        extracted_headings = [heading.content for heading in file.headings]
        self.assertEqual(
            expected, extracted_headings
        )
    
    def testHeadingLevels(self):
        file = Markdown("test.md")
        expected = [
            1,
            2,
            6
        ]
        extracted_levels = [heading.level for heading in file.headings]
        self.assertEqual(
            expected, extracted_levels
        )        

if __name__ == '__main__':
    t.main()
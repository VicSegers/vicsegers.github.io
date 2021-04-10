window.onload = function () {
  OrgChart.templates.jans_template = Object.assign(
    {},
    OrgChart.templates.ana
  );
  OrgChart.templates.jans_template.size = [86, 90];
  OrgChart.templates.jans_template.plus =
    '<circle stroke-width="3" fill="none" stroke="#039BE5" cx="15" cy="-32" r="41.5"></circle>';
  // OrgChart.templates.jans_template.minus = "";
  OrgChart.templates.jans_template.rippleRadius = 40;
  OrgChart.templates.jans_template.name =
    '<text style="font-size: 12px;" fill="#000000" x="43" y="100" text-anchor="middle">{val}</text>';
  OrgChart.templates.jans_template.birth =
    '<text style="font-size: 12px;" fill="#aeaeae" x="43" y="115" text-anchor="middle">{val}</text>';
  OrgChart.templates.jans_template.death =
    '<text style="font-size: 12px;" fill="#aeaeae" x="43" y="127" text-anchor="middle">&dagger;{val}</text>'
  OrgChart.templates.jans_template.img =
    '<clipPath id="{randId}"><circle cx="43" cy="43" r="38.5"></circle></clipPath></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="3" y="3"  width="80" height="80"></image>';
  OrgChart.templates.jans_template.node =
    '<circle stroke-width="3" fill="none" stroke="#aeaeae" cx="43" cy="43" r="41.5"></circle>';
  OrgChart.templates.jans_template_blue = Object.assign(
    {},
    OrgChart.templates.jans_template
  );
  OrgChart.templates.jans_template_dead = Object.assign(
    {},
    OrgChart.templates.jans_template
  )
  OrgChart.templates.jans_template_dead.node =
    '<text style="font-size: 15px; fill="#000000" x="10" y="20" style="z-index:1;">&dagger;</text>'
  OrgChart.templates.jans_template_blue.node =
    '<circle stroke-width="3" fill="none" stroke="#039BE5" cx="43" cy="43" r="41.5"></circle>';

  var chart = new OrgChart(document.getElementById("tree"), {
    template: "jans_template",
    siblingSeparation: 100,
    searchFields: ["name"],
    nodeMouseClick: OrgChart.action.expandCollapse,
    nodeBinding: {
      field_0: "id",
      name: "name",
      birth: "birth",
      death: "death",
      img: "img",
    },
    tags: {
      blue: {
        template: "jans_template_blue",
      },
      dead: {
        template: "jans_template_dead",
      },
    },
  });

  chart.load([
    {
      id: "jaak-jans",
      name: "Jaak Jans",
      img: "assets/man.jpeg",
      birth: "24-10-1899",
      death: "24-03-1975"
    },
    {
      id: "marida-thijs",
      pid: "jaak-jans",
      tags: ["partner"],
      name: "Marida Thijs",
      img: "assets/woman.jpeg",
      birth: "15-08-1906",
      death: "15-07-1997"
    },
    {
      id: "henri-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Henri Jans",
      img: "assets/man.jpeg",
      birth: "02-08-1928",
      death: "15-03-1984",
    },
    {
      id: "tina-basel",
      tags: ["partner"],
      pid: "henri-jans",
      name: "Tina Basel",
      img: "assets/woman.jpeg",
      birth: "18-09-1928",
      death: "28-01-1997"
    },
    {
      id: "maria-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Maria Jans",
      img: "assets/woman.jpeg",
      birth: "27-09-1929"
    },
    {
      id: "jacquline-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Jacquline Jans",
      img: "assets/woman.jpeg",
      birth: "14-11-1930"
    },
    {
      id: "rené-withofs",
      tags: ["partner"],
      pid: "jacquline-jans",
      name: "René Withofs",
      img: "assets/man.jpeg",
      birth: "20-08-1930",
      death: "07-12-1988"
    },
    {
      id: "bertha-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Bertha Jans",
      img: "assets/woman.jpeg",
      birth: "11-12-1931"
    },
    {
      id: "elias-jehaes",
      tags: ["partner"],
      pid: "bertha-jans",
      name: "Elias Jehaes",
      img: "assets/man.jpeg",
      birth: "09-02-1935"
    },
    {
      id: "trinette-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Trinette Jans",
      img: "assets/woman.jpeg",
      birth: "01-04-1933"
    },
    {
      id: "paulus-kerkhofs",
      tags: ["partner"],
      pid: "trinette-jans",
      name: "Paulus Kerkhofs",
      img: "assets/man.jpeg",
      birth: "21-09-1930"
    },
    {
      id: "benny-kerkhofs",
      pid: "trinette-jans",
      ppid: "paulus-kerkhofs",
      name: "Benny Kerkhofs",
      img: "assets/man.jpeg",
      birth: "?"
    },
    {
      id: "linda-bronzwaer",
      tags: ["partner"],
      pid: "benny-kerkhofs",
      name: "Linda Bronzwaer",
      img: "assets/woman.jpeg",
      birth: "?"
    },
    {
      id: "joris-kerkhofs",
      pid: "benny-kerkhofs",
      ppid: "linda-bronzwaer",
      name: "Joris Kerkhofs",
      img: "assets/man.jpeg",
      birth: "19-04-1993"
    },
    {
      id: "viviane-kerkhofs",
      pid: "trinette-jans",
      ppid: "paulus-kerkhofs",
      name: "Viviane Kerkhofs",
      img: "assets/woman.jpeg",
      birth: "?"
    },
    {
      id: "luk-loyens",
      tags: ["partner"],
      pid: "viviane-kerkhofs",
      name: "Luk Loyens",
      img: "assets/man.jpeg",
      birth: "?"
    },
    {
      id: "daria-loyens",
      pid: "viviane-kerkhofs",
      ppid: "luk-loyens",
      name: "Daria Loyens",
      img: "assets/woman.jpeg",
      birth: "10-11-1995"
    },
    {
      id: "pascal-kerkhofs",
      pid: "trinette-jans",
      ppid: "paulus-kerkhofs",
      name : "Pascal Kerkhofs",
      img: "assets/man.jpeg",
      birth: "08-07-1973"
    },
    {
      id: "patricia-comhair",
      tags: ["partner"],
      pid: "pascal-kerkhofs",
      name: "Patricia Comhair",
      img: "assets/woman.jpeg",
      birth: "?"
    },
    {
      id: "charlotte-kerkhofs",
      pid: "pascal-kerkhofs",
      ppid: "patricia-comhair",
      name: "Charlotte Kerkhofs",
      img: "assets/woman.jpeg",
      birth: "17-10-2005"
    },
    {
      id: "axelle-kerkhofs",
      pid: "pascal-kerkhofs",
      ppid: "patricia-comhair",
      name: "Axelle Kerkhofs",
      img: "assets/woman.jpeg",
      birth: "15-09-2006"
    },
    {
      id: "louise-kerkhofs",
      pid: "pascal-kerkhofs",
      ppid: "patricia-comhair",
      name: "Louise Kerkhofs",
      img: "assets/woman.jpeg",
      birth: "15-09-2006"
    },
    {
      id: "josefine-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Josefine Jans",
      img: "assets/woman.jpeg",
      birth: "11-05-1934"
    },
    {
      id: "mathieu-nijs",
      tags: ["partner"],
      pid: "josefine-jans",
      name: "Mathieu Nijs",
      img: "assets/man.jpeg",
      birth: "03-10-1927"
    },
    {
      id: "leonie-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Leonie Jans",
      img: "assets/woman.jpeg",
      birth: "11-05-1935"
    },
    {
      id: "jaak-kellens",
      tags: ["partner"],
      pid: "leonie-jans",
      name: "Jaak Kellens",
      img: "assets/man.jpeg",
      birth: "09-01-1938"
    },
    {
      id: "paula-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Paula Jans",
      img: "assets/woman.jpeg",
      birth: "21-07-1936"
    },
    {
      id: "astrid-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Astrid Jans",
      img: "assets/woman.jpeg",
      birth: "04-07-1937",
      death: "26-06-1941"
    },
    {
      id: "maurice-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Maurice Jans",
      img: "assets/man.jpeg",
      birth: "09-12-1938"
    },
    {
      id: "celine-nelissen",
      tags: ["partner"],
      pid: "maurice-jans",
      name: "Celine Nelissen",
      img: "assets/woman.jpeg",
      birth: "14-04-1946"
    },
    {
      id: "simone-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Simone Jans",
      img: "assets/woman.jpeg",
      birth: "02-02-1940",
      death: "17-02-1940"
    },
    {
      id: "lutgarde-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Lutgarde Jans",
      img: "assets/woman.jpeg",
      birth: "13-01-1942"
    },
    {
      id: "henri-moermans",
      tags: ["partner"],
      pid: "lutgarde-jans",
      name: "Henri Moermans",
      img: "assets/man.jpeg",
      birth: "02-11-1943",
      death: "13-11-2017"
    },
    {
      id: "marie-bert-moermans",
      pid: "lutgarde-jans",
      ppid: "henri-moermans",
      name: "Marie-Bert Moermans",
      img: "assets/woman.jpeg",
      birth: "15-06-1966",
      death: "13-07-2010"
    },
    {
      id: "jo-segers",
      pid: "marie-bert-moermans",
      tags: ["partner"],
      name: "Jo Segers",
      img: "assets/man.jpeg",
      birth: "12-01-1966"
    },
    {
      id: "jaak-segers",
      pid: "marie-bert-moermans",
      ppid: "jo-segers",
      name: "Jaak Segers",
      img: "assets/man.jpeg",
      birth: "09-09-1995"
    },
    {
      id: "rachel-segers",
      pid: "marie-bert-moermans",
      ppid: "jo-segers",
      name: "Rachel Segers",
      img: "assets/woman.jpeg",
      birth: "25-10-1996"
    },
    {
      id: "vic-segers",
      pid: "marie-bert-moermans",
      ppid: "jo-segers",
      name: "Vic Segers",
      img: "assets/man.jpeg",
      birth: "10-04-1998"
    },
    {
      id: "myriam-moermans",
      pid: "lutgarde-jans",
      ppid: "henri-moermans",
      name: "Myriam Moermans",
      img: "assets/woman.jpeg",
      birth: "26-06-1967",
      death: "09-04-1991"
    },
    {
      id: "katrien-moermans",
      pid: "lutgarde-jans",
      ppid: "henri-moermans",
      name: "Katrien Moermans",
      img: "assets/woman.jpeg",
      birth: "24-06-1968"
    },
    {
      id: "daniel-geyskens",
      pid: "katrien-moermans",
      tags: ["partner"],
      name: "Daniel Geyskens",
      img: "assets/man.jpeg",
      birth: "08-04-1967"
    },
    {
      id: "dorien-geyskens",
      pid: "katrien-moermans",
      ppid: "daniel-geyskens",
      name: "Dorien Geyskens",
      img: "assets/woman.jpeg",
      birth: "13-03-1994"
    },
    {
      id: "bieke-geyskens",
      pid: "katrien-moermans",
      ppid: "daniel-geyskens",
      name: "Bieke Geyskens",
      img: "assets/woman.jpeg",
      birth: "03-09-1996"
    },
    {
      id: "simon-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Simon Jans",
      img: "assets/man.jpeg",
      birth: "18-02-1943",
      death: "05-03-1943"
    },
    {
      id: "gustaaf-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Gustaaf Jans",
      img: "assets/man.jpeg",
      birth: "26-08-1944",
      death: "26-09-1944"
    },
    {
      id: "jean-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Jean Jans",
      img: "assets/man.jpeg",
      birth: "19-03-1945"
    },
    {
      id: "marie-louise-hermans",
      tags: ["partner"],
      pid: "jean-jans",
      name: "Marie-Louise Hermans",
      img: "assets/woman.jpeg",
      birth: "02-09-1948"
    },
    {
      id: "paul-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Paul Jans",
      img: "assets/man.jpeg",
      birth: "01-08-1947",
      death: "01-03-2021"
    },
    {
      id: "?",
      tags: ["partner"],
      pid: "paul-jans",
      name: "?",
      img: "assets/woman.jpeg",
      birth: "29-12-19??"
    },
    {
      id: "madeleine-jans",
      pid: "jaak-jans",
      ppid: "marida-thijs",
      name: "Madeleine Jans",
      img: "assets/woman.jpeg",
      birth: "??-01-1949",
      death: "??-01-1949"
    },
  ]);
};
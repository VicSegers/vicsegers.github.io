window.onload = function () {
  OrgChart.templates.family_template = Object.assign(
    {},
    OrgChart.templates.ana
  );
  OrgChart.templates.family_template.size = [86, 90];
  OrgChart.templates.family_template.plus =
    '<circle stroke-width="3" fill="none" stroke="#039BE5" cx="15" cy="-32" r="41.5"></circle>';
  // OrgChart.templates.family_template.minus = "";
  OrgChart.templates.family_template.rippleRadius = 40;
  OrgChart.templates.family_template.name =
    '<text style="font-size: 12px;" fill="#000000" x="43" y="100" text-anchor="middle">{val}</text>';
  OrgChart.templates.family_template.birth =
    '<text style="font-size: 12px;" fill="#aeaeae" x="43" y="115" text-anchor="middle">{val}</text>';
  OrgChart.templates.family_template.death =
    '<text style="font-size: 12px;" fill="#aeaeae" x="43" y="127" text-anchor="middle">&dagger;{val}</text>'
  OrgChart.templates.family_template.img =
    '<clipPath id="{randId}"><circle cx="43" cy="43" r="38.5"></circle></clipPath></circle><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="3" y="3"  width="80" height="80"></image>';
  OrgChart.templates.family_template.node =
    '<circle stroke-width="3" fill="none" stroke="#aeaeae" cx="43" cy="43" r="41.5"></circle>';
  OrgChart.templates.family_template.defs =
    '<g transform="matrix(0.05,0,0,0.05,-13,-15.5)" id="baby"><circle cx="260" cy="310" r="200" fill="#ffffff"></circle><path fill="#aeaeae" d="m468.64 268.32h-13.591c-18.432-89.348-95.612-157.432-189.139-161.798-.501-.185-1.015-.348-1.545-.482-18.363-4.622-31.188-22.595-31.188-43.707 0-17.828 14.468-32.333 32.252-32.333 12.573 0 22.802 10.258 22.802 22.866 0 8.284 6.716 15 15 15s15-6.716 15-15c0-29.15-23.687-52.866-52.802-52.866-34.326 0-62.252 27.962-62.252 62.333 0 17.876 5.828 34.443 15.769 47.432-80.698 15.127-144.725 78.25-161.291 158.555h-13.591c-24.103 0-43.712 19.596-43.712 43.683 0 24.086 19.609 43.682 43.712 43.682h14.692c20.935 89.871 101.582 157.018 197.596 157.018s176.66-67.148 197.596-157.018h14.692c24.103 0 43.712-19.596 43.712-43.682 0-24.087-19.609-43.683-43.712-43.683zm-265.054 55.257c-8.284-.024-14.981-6.758-14.958-15.043.007-2.337-.708-13.999-15.481-14.041-.026 0-.053 0-.08 0-14.697 0-15.475 11.62-15.481 13.953-.023 8.284-6.75 15.007-15.043 14.957-8.284-.024-14.98-6.759-14.957-15.043.038-13.322 5.349-25.101 14.955-33.166 8.223-6.904 19.065-10.702 30.543-10.702h.148c11.534.033 22.412 3.896 30.63 10.876 9.559 8.12 14.803 19.928 14.765 33.25-.023 8.27-6.735 14.957-14.999 14.957-.013.002-.027.002-.042.002zm52.766 129.374c-26.485 0-48.033-21.533-48.033-48.002 0-8.284 6.716-15 15-15s15 6.716 15 15c0 9.926 8.089 18.002 18.033 18.002s18.033-8.076 18.033-18.002c0-8.284 6.716-15 15-15s15 6.716 15 15c-.001 26.469-21.548 48.002-48.033 48.002zm113.765-129.374c-.015 0-.029 0-.044 0-8.284-.024-14.98-6.759-14.957-15.043.016-5.445-1.993-9.263-6.14-11.673-5.407-3.142-13.27-3.165-18.695-.053-4.161 2.387-6.191 6.193-6.207 11.638-.023 8.27-6.735 14.957-14.999 14.957-.015 0-.029 0-.043 0-8.284-.024-14.981-6.758-14.958-15.043.046-16.149 7.802-29.845 21.281-37.576 14.814-8.497 33.929-8.443 48.695.138 13.434 7.807 21.112 21.547 21.066 37.696-.023 8.271-6.735 14.959-14.999 14.959z"/> </g>';
  OrgChart.templates.family_template_blue = Object.assign(
    {},
    OrgChart.templates.family_template
  );
  OrgChart.templates.family_template_blue.node =
    '<circle stroke-width="3" fill="none" stroke="#039BE5" cx="43" cy="43" r="41.5"></circle>';

  var chart = new OrgChart(document.getElementById("tree"), {
    template: "family_template",
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
        template: "family_template_blue",
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
      birth: "02-08-1984",
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
      birth: "02-11-1943"
    },
    {
      id: "marie-bert-moermans",
      pid: "lutgarde-jans",
      ppid: "henri-moermans",
      name: "Marie-Bert Moermans",
      img: "assets/woman.jpeg",
      birth: "15-06-1966"
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
      birth: "01-08-1947"
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
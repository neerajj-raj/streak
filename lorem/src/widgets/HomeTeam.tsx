import { Script } from "streak/components";

interface HomeTeamProps {
  data: {
    button_name: string;
    button_link: string;
    team_section: {
      team_members_details: Array<{
        team_member_image: string;
        name: string;
        positions: string;
      }>
    }
  }
}

const HomeTeam = (props: HomeTeamProps) => {
  const { button_name, button_link, team_section } = props?.data || {};

  return team_section?.team_members_details?.length > 0 && (
    <div className="team-sec" role="presentation">
      <div
        id="HomeTeamId"
        className="carousel"
        data-flickity='{ "freeScroll": true, "contain": true, "prevNextButtons": false, "pageDots": false }'
      >
        {
          team_section?.team_members_details?.map((team, index) => (
            <div key={`${team?.name}-${index}`} className="carousel-cell" style={{ background: `url('${team?.team_member_image}') center center / cover no-repeat` }}>
              <div className="team-content">
                <h3>{team?.name}</h3>
                <strong>{team?.positions}</strong>
              </div>
            </div>
          ))
        }
      </div>
      {button_name &&
        <div className="ft-wrap">
          <div className="medium-container">
            <div className="footer-btn">
              {/* #8A4600 For LH Accessibility */}
              <a href={button_link} className="btn" style={{ backgroundColor: "#8A4600" }}>{button_name}</a>
            </div>
          </div>
        </div>}
      <Script id="HomeTeam">
        {(gDom: any) => {
          gDom
            .loadPackage("js/flickity.pkgd.min.js")
            .then(() => {
              const carousel = document.getElementById('HomeTeamId');
              const Flickity = (gDom as any).Flickity;
              new Flickity(carousel, {
                freeScroll: true,
                contain: true,
                prevNextButtons: false,
                pageDots: false,
              });
            })
        }}
      </Script>
    </div>
  )
}

export default HomeTeam;
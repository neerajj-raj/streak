interface AboutTeamProps {
  data: {
    main_heading: string;
    team_section: {
      team_members_details: Array<{
        team_member_image: string;
        name: string;
        positions: string;
      }>
    }
  }
};

const AboutTeam = (props: AboutTeamProps) => {
  const { main_heading, team_section } = props?.data || {};

  return team_section?.team_members_details?.length > 0 && (
    <div className="team" id="team">
      <div className="medium-container">
        <h2 data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">{main_heading}</h2>
        <div className="team-sec flex">
          {
            team_section?.team_members_details?.map((each, index) => (
              <div
                key={each?.name}
                className="team-box"
                style={{ background: `url(${each?.team_member_image}) no-repeat center center/cover;` }}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={(index + 1) * 100}>
                <div className="team-content">
                  <h3>{each?.name}</h3>
                  <strong>{each?.positions}</strong>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AboutTeam;
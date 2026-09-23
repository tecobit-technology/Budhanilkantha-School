import InvitationForBidsLayout from "@/components/InvitationForBids/InvitationForBidsLayout";

export default function InvitationForBids() {
  return (
    <InvitationForBidsLayout
      title="Invitation for Bids No: BNKS/NCB/Works/01/2082-83"
      active="Invitation for Bids No: BNKS/NCB/Works/01/2082-83"
    >
      <div className="text-[15px] leading-[1.9] text-neutral-700">
        <p className="text-center font-medium m-0">
          Invitation for Bids No: BNKS/NCB/Works/01/2082-83
        </p>
        <p className="text-center m-0 mb-4">Date of publication: 2082-08-23</p>

        <p className="text-justify">
          Budhanilkantha School (BNKS) invites electronic bids from eligible
          bidders for the construction of of East Side Boundary Wall with
          V-Drain, Toe Wall and Landscaping, Main Gate and Guard Post
          (Package-C &ldquo;1<sup>st</sup> Phase&rdquo;) under National
          Competitive Bidding &ndash; Single Stage Two Envelope Bidding
          procedures.
        </p>

        <div className="mt-4">
          {/* Replace href with the real PDF/document path once it's hosted. */}
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#2f9e44] text-white text-[13.5px] font-medium px-4 py-2.5 rounded hover:bg-[#278239] transition-colors"
          >
            <span aria-hidden="true">⬇</span>
            Invitation for Bids No: BNKS/NCB/Works/01/2082-83
          </a>
        </div>
      </div>
    </InvitationForBidsLayout>
  );
}

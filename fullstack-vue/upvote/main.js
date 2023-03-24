import submissionComponent from "./app/submission.js"
import { submissions } from "./app/seed.js"

new Vue({
	el: '#app',
	data: {
		submissions: submissions
	},
  	// render: (h)=>h(submissionComponent),
	computed: {
		sortedSubmissions() {
			return this.submissions.sort((a, b) => {
				return b.votes - a.votes;
			});
		},
	},
	/* methods: {
		upvote(sub){
			sub.votes++;
		}
	}, */
	components: {
		'submission-component': submissionComponent,
	}
});

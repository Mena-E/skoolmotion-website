# Deploy SMS Opt-In Page - Step by Step

## What We're Doing
Adding the `sms-opt-in.html` file to your live website so it's accessible at:
**https://skoolmotion.com/sms-opt-in.html**

---

## Option 1: Deploy via GitHub (Recommended)

### Step 1: Download the Updated Files
Download the `skoolmotion-website-updated.zip` file I created (available in the outputs).

### Step 2: Extract the Zip File
- On Mac: Double-click the zip file
- On Windows: Right-click → Extract All

### Step 3: Navigate to Your Website Repository
Open Terminal (Mac) or Command Prompt/PowerShell (Windows) and navigate to where your website code is:

```bash
cd /path/to/your/skoolmotion-website
```

### Step 4: Copy the New File
Copy just the `sms-opt-in.html` file from the extracted folder to your repository:

```bash
# Mac/Linux
cp /path/to/extracted/skoolmotion-website/sms-opt-in.html .

# Windows PowerShell
Copy-Item "C:\path\to\extracted\skoolmotion-website\sms-opt-in.html" -Destination .
```

Or simply drag and drop the `sms-opt-in.html` file into your website folder.

### Step 5: Commit and Push to GitHub
```bash
# Check the file is there
ls -la sms-opt-in.html

# Add the file to git
git add sms-opt-in.html

# Commit with a message
git commit -m "Add SMS opt-in page for Twilio verification"

# Push to GitHub
git push origin main
```

### Step 6: Wait for Vercel to Deploy
- Vercel will automatically detect the push
- It will build and deploy (usually takes 30-60 seconds)
- You'll get a deployment notification if you have Vercel notifications enabled

### Step 7: Verify It's Live
Open your browser and go to:
```
https://skoolmotion.com/sms-opt-in.html
```

You should see the SMS opt-in demonstration page!

---

## Option 2: Deploy via Vercel Dashboard

If you don't want to use Git/terminal:

### Step 1: Go to Vercel Dashboard
1. Go to https://vercel.com
2. Sign in to your account
3. Find your `skoolmotion-website` project
4. Click on it

### Step 2: Go to Deployments
Click on the "Deployments" tab at the top

### Step 3: Redeploy
1. Find your latest deployment
2. Click the three dots (•••) on the right
3. Click "Redeploy"

But first, you need to upload the file to GitHub...

**Actually, for this option, it's easier to just use Option 1 (Git push) or Option 3 below.**

---

## Option 3: Quick Upload via GitHub Web Interface

### Step 1: Download the sms-opt-in.html file
Download just the `sms-opt-in.html` file from the outputs.

### Step 2: Go to GitHub
1. Go to https://github.com
2. Navigate to your repository (probably something like `yourusername/skoolmotion-website`)

### Step 3: Upload File
1. Click "Add file" → "Upload files"
2. Drag and drop `sms-opt-in.html` 
3. Scroll down and add commit message: "Add SMS opt-in page for Twilio verification"
4. Click "Commit changes"

### Step 4: Wait for Auto-Deploy
Vercel will automatically detect the change and deploy (30-60 seconds)

### Step 5: Verify
Visit: `https://skoolmotion.com/sms-opt-in.html`

---

## Troubleshooting

### "File not found" / 404 Error
- Wait 1-2 minutes for Vercel to finish deploying
- Clear your browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check Vercel dashboard to see deployment status

### Vercel Deployment Failed
- Check the Vercel logs in your dashboard
- Make sure the file is in the root directory (same level as index.html, not in a subfolder)

### Git Push Fails
```bash
# If you get "permission denied" errors, make sure you're authenticated
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Try pull first in case there are remote changes
git pull origin main
git push origin main
```

---

## After Deployment

Once the page is live at `https://skoolmotion.com/sms-opt-in.html`, you can:

1. **Test it yourself** - Make sure it loads correctly
2. **Submit to Twilio** - Use this URL in your Twilio phone number verification form
3. **Optional:** Add a link from your Support page if you want it discoverable

---

## What to Tell Twilio

When submitting your Twilio phone number registration:

- **Opt-in URL:** https://skoolmotion.com/sms-opt-in.html
- **Opt-in Method:** Web form
- **Description:** "Users provide SMS consent during account creation in our mobile app. This page demonstrates our opt-in process and includes all required disclosures."

---

## Next Steps

1. Deploy the page using one of the methods above
2. Verify it's accessible at the URL
3. Submit the URL to Twilio for verification
4. Wait for Twilio approval (usually 1-3 business days)

Good luck! 🚀
